// Plantão Quiz — jogo de casos clínicos com pontos
(() => {
  "use strict";

  const STORE_KEY = "plantao-quiz-v1";
  const META = 1000; // ao bater 1000 pontos, zera automaticamente
  const DIF_NAME = { 1: "Fácil", 2: "Médio", 3: "Difícil" };
  const DIF_PTS = { 1: 10, 2: 15, 3: 20 };
  const LEVELS = ["Estudante", "Interno", "Residente R1", "Residente R2", "Residente R3",
    "Especialista", "Preceptor", "Chefe de Plantão", "Lenda da Medicina"];
  const SPECIALTIES = [...new Set(CASES.map((c) => c.esp))].sort((a, b) => a.localeCompare(b));
  const CASE_BY_ID = Object.fromEntries(CASES.map((c) => [c.id, c]));

  const BADGES = [
    { id: "primeiro", ico: "🩺", nome: "Primeiro atendimento", desc: "Concluir o primeiro caso" },
    { id: "perfeito", ico: "💯", nome: "Caso perfeito", desc: "Acertar tudo num caso sem usar dica" },
    { id: "plantao", ico: "🌙", nome: "Plantão completo", desc: "Concluir todos os casos do dia" },
    { id: "streak3", ico: "🔥", nome: "Ritmo de residente", desc: "3 dias seguidos de plantão completo" },
    { id: "streak7", ico: "⚡", nome: "Semana de ferro", desc: "7 dias seguidos de plantão completo" },
    { id: "pts500", ico: "⭐", nome: "500 pontos", desc: "Somar 500 pontos" },
    { id: "meta1000", ico: "🏆", nome: "Meta de 1.000", desc: "Bater 1.000 pontos (os pontos zeram e começa outra rodada)" },
    { id: "resp50", ico: "📚", nome: "50 respostas", desc: "Responder 50 perguntas" },
    { id: "dificil", ico: "🧠", nome: "Caso difícil", desc: "Acertar tudo num caso difícil" },
    { id: "todas", ico: "🌍", nome: "Clínico geral", desc: "Acertar ao menos uma pergunta em cada especialidade" },
  ];

  // ---------- Estado ----------
  const defaultState = () => ({
    name: "",
    perDay: 5,
    points: 0,
    answered: 0,
    correct: 0,
    spec: {},          // { esp: { c, t } }
    days: {},          // { "2026-11-23": { points, correct, total } }
    daily: {},         // { "2026-11-23": { ids: [], results: { id: result } } }
    streak: 0,
    bestStreak: 0,
    rounds: 0,         // quantas vezes bateu 1000 pontos
    lastFullDay: null,
    badges: {},        // { id: dateISO }
    luck: null,        // { id, mult } caso sorteado aguardando atendimento
    recent: [],        // últimos casos sorteados (evita repetir)
  });

  let state = load();
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return { ...defaultState(), ...JSON.parse(raw) };
    } catch (e) { /* ignora */ }
    return defaultState();
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignora */ }
  }

  // ---------- Datas ----------
  function dateKey(d = new Date()) {
    const z = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
  }
  function addDays(key, n) {
    const [y, m, d] = key.split("-").map(Number);
    return dateKey(new Date(y, m - 1, d + n));
  }
  const today = () => dateKey();

  // ---------- Sorteio diário ----------
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffled(arr, rand) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function todayPlan() {
    const key = today();
    if (!state.daily[key]) {
      const n = Math.min(state.perDay, CASES.length);
      // evita repetir casos dos últimos dias, mas deixa a escolha variar
      const lookback = Math.max(1, Math.floor(CASES.length / n) - 2);
      const avoid = new Set();
      for (let d = 1; d <= lookback; d++) {
        const prev = state.daily[addDays(key, -d)];
        if (prev) prev.ids.forEach((id) => avoid.add(id));
      }
      const order = shuffled(CASES.map((c) => c.id), rng(hash(key)));
      const fresh = order.filter((id) => !avoid.has(id));
      const ids = fresh.concat(order.filter((id) => avoid.has(id))).slice(0, n);
      state.daily[key] = { ids, results: {}, revealed: [] };
      // limpa planos com mais de 60 dias
      const limit = addDays(key, -60);
      for (const k of Object.keys(state.daily)) if (k < limit) delete state.daily[k];
      save();
    }
    return state.daily[key];
  }

  // ---------- Nível ----------
  function levelInfo(points) {
    let lvl = 0, need = 100, base = 0;
    while (points >= base + need) { base += need; lvl++; need = 100 + lvl * 75; }
    return {
      index: lvl,
      name: LEVELS[Math.min(lvl, LEVELS.length - 1)] + (lvl >= LEVELS.length ? ` ${lvl - LEVELS.length + 2}` : ""),
      into: points - base,
      need,
      pct: Math.round(((points - base) / need) * 100),
    };
  }

  // ---------- Utilidades ----------
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const fmt = (n) => Number(n).toLocaleString("pt-BR");
  const pct = (c, t) => (t ? Math.round((c / t) * 100) : 0);

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    $("#toasts").appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
  function confirmBox(text) {
    return new Promise((resolve) => {
      const dlg = $("#confirm");
      $("#confirmText").textContent = text;
      dlg.returnValue = "";
      dlg.addEventListener("close", () => resolve(dlg.returnValue === "ok"), { once: true });
      dlg.showModal();
    });
  }

  function maxPoints(c) {
    return c.perguntas.length * DIF_PTS[c.dif] + 5 * c.dif;
  }

  // ---------- Pontuação ----------
  function award(c, mode, answers, hints, mult = 1) {
    const per = DIF_PTS[c.dif];
    let pts = 0, correct = 0;
    c.perguntas.forEach((q, i) => {
      const ok = answers[i] === q.c;
      if (ok) { correct++; pts += hints[i] ? Math.round(per / 2) : per; }
    });
    const perfect = correct === c.perguntas.length && !hints.some(Boolean);
    if (perfect) pts += 5 * c.dif;
    if (mode === "treino") pts = Math.round(pts / 2);
    if (mode === "sorteio") pts = Math.round((pts / 2) * mult);
    return { pts, correct, total: c.perguntas.length, perfect };
  }

  function unlock(id) {
    if (state.badges[id]) return;
    state.badges[id] = today();
    const b = BADGES.find((x) => x.id === id);
    toast(`${b.ico} Conquista: ${b.nome}`);
  }

  function commitResult(c, mode, answers, hints, mult = 1) {
    const r = award(c, mode, answers, hints, mult);
    if (mode === "sorteio") state.luck = null;
    const key = today();
    const beforeLvl = levelInfo(state.points).index;
    let bonus = 0;

    state.answered += r.total;
    state.correct += r.correct;
    const s = (state.spec[c.esp] ||= { c: 0, t: 0 });
    s.c += r.correct; s.t += r.total;

    if (mode === "plantao") {
      const plan = todayPlan();
      plan.results[c.id] = { answers, hints, pts: r.pts, correct: r.correct, total: r.total };
      const allDone = plan.ids.every((id) => plan.results[id]);
      if (allDone) {
        if (state.lastFullDay === addDays(key, -1)) state.streak += 1;
        else if (state.lastFullDay !== key) state.streak = 1;
        state.lastFullDay = key;
        state.bestStreak = Math.max(state.bestStreak, state.streak);
        bonus = 20 + Math.min(state.streak, 7) * 2;
        unlock("plantao");
        if (state.streak >= 3) unlock("streak3");
        if (state.streak >= 7) unlock("streak7");
      }
    }

    const total = r.pts + bonus;
    state.points += total;
    let hitMeta = false;
    if (state.points >= META) {
      state.rounds = (state.rounds || 0) + 1;
      state.points = 0;
      hitMeta = true;
      unlock("meta1000");
      toast(`🏆 Você bateu ${fmt(META)} pontos! Os pontos foram zerados — rodada ${state.rounds + 1} começando.`);
    }
    const d = (state.days[key] ||= { points: 0, correct: 0, total: 0 });
    d.points += total; d.correct += r.correct; d.total += r.total;

    unlock("primeiro");
    if (r.perfect) unlock("perfeito");
    if (r.correct === r.total && c.dif === 3) unlock("dificil");
    if (state.points >= 500) unlock("pts500");
    if (state.answered >= 50) unlock("resp50");
    if (SPECIALTIES.every((e) => state.spec[e] && state.spec[e].c > 0)) unlock("todas");

    const after = levelInfo(state.points);
    if (!hitMeta && after.index > beforeLvl) toast(`🎉 Subiu de nível: ${after.name}!`);
    save();
    return { ...r, bonus };
  }

  // ---------- Topo ----------
  function renderChips() {
    const lv = levelInfo(state.points);
    const plan = todayPlan();
    const done = plan.ids.filter((id) => plan.results[id]).length;
    $("#chips").innerHTML = `
      <span class="chip hide-sm">🩺 ${done}/${plan.ids.length} hoje</span>
      <span class="chip">🔥 ${currentStreak()}</span>
      <span class="chip primary">⭐ ${fmt(state.points)}/${fmt(META)}</span>${state.rounds ? `<span class="chip hide-sm">🏆 ${state.rounds}</span>` : ""}
      <span class="chip hide-sm">🎓 ${esc(lv.name)}</span>`;
  }
  function currentStreak() {
    const k = today();
    return state.lastFullDay === k || state.lastFullDay === addDays(k, -1) ? state.streak : 0;
  }

  // ---------- Telas ----------
  const TITLES = { inicio: "Início", plantao: "Plantão do dia", treino: "Treino livre", desempenho: "Desempenho", conquistas: "Conquistas", ajustes: "Ajustes", caso: "Caso clínico", sorteio: "Sortear caso" };

  function isRevealed(plan, id) {
    return !!plan.results[id] || (plan.revealed || []).includes(id);
  }
  function planItem(plan, id, i) {
    if (isRevealed(plan, id)) return caseItem(CASE_BY_ID[id], i, plan.results[id], `#/caso/plantao/${id}`);
    return `
      <a class="case-item mystery" href="#/caso/plantao/${id}" style="text-decoration:none">
        <div class="num">?</div>
        <div class="info"><strong>Caso surpresa</strong><span class="muted small">Toque para abrir</span></div>
        <div class="pts">🎁</div>
      </a>`;
  }
  function planNextAction(plan) {
    const open = plan.ids.find((id) => !plan.results[id]);
    if (open) return `<a class="btn" href="#/caso/plantao/${open}">${isRevealed(plan, open) ? "▶ Continuar caso" : "🎁 Abrir próximo caso surpresa"}</a>`;
    return `<span class="badge ok">✓ Plantão concluído! Volte amanhã para novos casos.</span>`;
  }

  function caseItem(c, i, result, href) {
    return `
      <a class="case-item ${result ? "done" : ""}" href="${href}" style="text-decoration:none">
        <div class="num">${result ? "✓" : i + 1}</div>
        <div class="info">
          <strong>${esc(c.titulo)}</strong>
          <span class="muted small">${esc(c.paciente)}</span>
          <div class="meta">
            <span class="badge esp">${esc(c.esp)}</span>
            <span class="badge d${c.dif}">${DIF_NAME[c.dif]}</span>
            <span class="badge">${c.perguntas.length} perguntas</span>
          </div>
        </div>
        <div class="pts">${result ? `+${result.pts} pts` : `até ${maxPoints(c)} pts`}</div>
      </a>`;
  }

  function viewInicio() {
    const lv = levelInfo(state.points);
    const plan = todayPlan();
    const done = plan.ids.filter((id) => plan.results[id]).length;
    const todayPts = (state.days[today()] || {}).points || 0;
    const hello = state.name ? `Olá, ${esc(state.name)}!` : "Olá!";

    const days = [];
    for (let i = 13; i >= 0; i--) {
      const k = addDays(today(), -i);
      days.push({ k, p: (state.days[k] || {}).points || 0 });
    }
    const maxP = Math.max(50, ...days.map((d) => d.p));

    const weak = SPECIALTIES
      .map((e) => ({ e, s: state.spec[e] }))
      .filter((x) => x.s && x.s.t >= 2)
      .sort((a, b) => a.s.c / a.s.t - b.s.c / b.s.t)
      .slice(0, 3);

    return `
      ${installCard()}
      <a class="card spin-banner" href="#/sorteio/girar">
        <span class="spin-emoji">🎰</span>
        <div><b>Sortear um caso</b><div class="small">Toque para girar a roleta e ganhar até ×3 de pontos</div></div>
        <span class="spacer"></span><span class="go">›</span>
      </a>
      <div class="grid kpis">
        <div class="card kpi"><div class="label">Pontos <span>⭐</span></div><div class="value">${fmt(state.points)}<span class="muted" style="font-size:14px;font-weight:600"> / ${fmt(META)}</span></div><div class="progress" style="margin:6px 0"><i style="width:${pct(state.points, META)}%"></i></div><div class="sub">Faltam ${fmt(META - state.points)} · +${fmt(todayPts)} hoje${state.rounds ? ` · 🏆 ${state.rounds}× meta` : ""}</div></div>
        <div class="card kpi"><div class="label">Nível <span>🎓</span></div><div class="value" style="font-size:19px;margin:8px 0 6px">${esc(lv.name)}</div><div class="progress"><i style="width:${lv.pct}%"></i></div><div class="sub">${lv.into}/${lv.need} para o próximo</div></div>
        <div class="card kpi"><div class="label">Sequência <span>🔥</span></div><div class="value">${currentStreak()} ${currentStreak() === 1 ? "dia" : "dias"}</div><div class="sub">Recorde: ${state.bestStreak}</div></div>
        <div class="card kpi"><div class="label">Acertos <span>🎯</span></div><div class="value">${pct(state.correct, state.answered)}%</div><div class="sub">${fmt(state.correct)} de ${fmt(state.answered)} perguntas</div></div>
      </div>

      <div class="grid two" style="margin-top:16px">
        <div class="card">
          <div class="row"><h2 style="margin:0">${hello} Seu plantão de hoje</h2><span class="spacer"></span><span class="badge ${done === plan.ids.length ? "ok" : ""}">${done}/${plan.ids.length}</span></div>
          <div class="progress" style="margin:12px 0 16px"><i style="width:${pct(done, plan.ids.length)}%"></i></div>
          <div class="case-list">${plan.ids.slice(0, 3).map((id, i) => planItem(plan, id, i)).join("")}</div>
          <div class="row" style="margin-top:14px">
            ${planNextAction(plan)}
            <a class="btn ghost" href="#/plantao">Ver todos</a>
          </div>
        </div>
        <div class="card">
          <h2>Pontos nos últimos 14 dias</h2>
          <div class="bars">${days.map((d, i) => `<div class="bar ${i === 13 ? "today" : ""}" title="${d.k}: ${d.p} pts"><i style="height:${(d.p / maxP) * 100}%"></i><small>${d.k.slice(8)}</small></div>`).join("")}</div>
          <h2 style="margin-top:18px">Para revisar</h2>
          ${weak.length ? weak.map((w) => `<div class="row small" style="margin:6px 0"><span style="width:130px">${esc(w.e)}</span><div class="progress spacer"><i style="width:${pct(w.s.c, w.s.t)}%"></i></div><b>${pct(w.s.c, w.s.t)}%</b></div>`).join("") : `<p class="muted small">Responda alguns casos para ver onde focar.</p>`}
          <a class="btn soft block" style="margin-top:12px" href="#/treino">🎯 Treinar mais</a>
        </div>
      </div>`;
  }

  function viewPlantao() {
    const plan = todayPlan();
    const done = plan.ids.filter((id) => plan.results[id]);
    const pts = done.reduce((s, id) => s + plan.results[id].pts, 0);
    return `
      <div class="card">
        <div class="row">
          <div><h2 style="margin:0">Casos de hoje</h2><span class="muted small">Casos surpresa novos todos os dias — toque para abrir. Conclua todos para ganhar o bônus de plantão (+20 e mais pela sequência).</span></div>
          <span class="spacer"></span><span class="chip primary">+${pts} pts hoje</span>
        </div>
        <div class="progress" style="margin:14px 0"><i style="width:${pct(done.length, plan.ids.length)}%"></i></div>
        <div class="case-list">${plan.ids.map((id, i) => planItem(plan, id, i)).join("")}</div>
        <div class="row" style="margin-top:14px">${planNextAction(plan)}</div>
      </div>
      <p class="muted small" style="margin-top:14px">Pontuação: Fácil 10, Médio 15, Difícil 20 por acerto · dica vale metade · caso perfeito dá bônus · treino livre vale metade dos pontos · no sorteio livre a sorte multiplica (×1, ×2 ou ×3) os pontos de treino.</p>`;
  }

  let trainFilter = "Todas";
  function viewTreino() {
    const list = CASES.filter((c) => trainFilter === "Todas" || c.esp === trainFilter);
    return `
      <div class="card">
        <div class="row" style="margin-bottom:12px"><h2 style="margin:0">Escolha uma especialidade</h2><span class="spacer"></span>
          <button class="btn" id="btnRandom">🎲 Caso aleatório</button></div>
        <div class="filters">${["Todas", ...SPECIALTIES].map((e) => `<button class="filter ${e === trainFilter ? "active" : ""}" data-esp="${esc(e)}">${esc(e)}</button>`).join("")}</div>
        <div class="case-list">${list.map((c, i) => caseItem(c, i, null, `#/caso/treino/${c.id}`)).join("")}</div>
      </div>`;
  }
  function bindTreino() {
    document.querySelectorAll(".filter").forEach((b) => b.addEventListener("click", () => { trainFilter = b.dataset.esp; render(); }));
    $("#btnRandom").addEventListener("click", () => {
      const list = CASES.filter((c) => trainFilter === "Todas" || c.esp === trainFilter);
      const c = list[Math.floor(Math.random() * list.length)];
      location.hash = `#/caso/treino/${c.id}`;
    });
  }

  function viewDesempenho() {
    const rows = SPECIALTIES.map((e) => {
      const s = state.spec[e] || { c: 0, t: 0 };
      const total = CASES.filter((c) => c.esp === e).length;
      return `<tr><td><b>${esc(e)}</b><br><span class="muted small">${total} casos no banco</span></td><td>${s.c}/${s.t}</td><td style="width:40%"><div class="row"><div class="progress spacer"><i style="width:${pct(s.c, s.t)}%"></i></div><b>${s.t ? pct(s.c, s.t) + "%" : "—"}</b></div></td></tr>`;
    }).join("");
    const lv = levelInfo(state.points);
    return `
      <div class="grid kpis">
        <div class="card kpi"><div class="label">Perguntas respondidas</div><div class="value">${fmt(state.answered)}</div></div>
        <div class="card kpi"><div class="label">Acertos</div><div class="value">${pct(state.correct, state.answered)}%</div></div>
        <div class="card kpi"><div class="label">Maior sequência</div><div class="value">${state.bestStreak} 🔥</div></div>
        <div class="card kpi"><div class="label">Nível</div><div class="value" style="font-size:19px">${esc(lv.name)}</div></div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>Acertos por especialidade</h2>
        <table><thead><tr><th>Especialidade</th><th>Acertos</th><th>Aproveitamento</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      <a class="btn ghost" style="margin-top:16px" href="#/conquistas">🏅 Ver conquistas (${Object.keys(state.badges).length}/${BADGES.length})</a>`;
  }

  function viewConquistas() {
    return `
      <div class="card">
        <h2>Conquistas — ${Object.keys(state.badges).length} de ${BADGES.length}</h2>
        <div class="badges">${BADGES.map((b) => `
          <div class="ach ${state.badges[b.id] ? "" : "locked"}">
            <div class="ico">${b.ico}</div>
            <div><b>${esc(b.nome)}</b><br><span class="muted small">${esc(b.desc)}</span>${state.badges[b.id] ? `<br><span class="badge ok">${state.badges[b.id].split("-").reverse().join("/")}</span>` : ""}</div>
          </div>`).join("")}</div>
      </div>`;
  }

  function viewAjustes() {
    return `
      <div class="card" style="max-width:520px">
        <h2>Seu perfil</h2>
        <label class="field">Seu nome
          <input id="cfgName" type="text" maxlength="30" value="${esc(state.name)}" placeholder="Ex.: Dra. Ana" />
        </label>
        <label class="field">Casos por dia no plantão
          <select id="cfgPerDay">${[3, 5, 8, 10].map((n) => `<option ${n === state.perDay ? "selected" : ""}>${n}</option>`).join("")}</select>
        </label>
        <p class="muted small">A mudança vale a partir do próximo dia (o plantão de hoje continua igual).</p>
        <div class="row"><button class="btn" id="btnSave">Salvar</button></div>
      </div>
      <div class="card" style="max-width:520px;margin-top:16px${window.EMBED ? ";display:none" : ""}">
        <h2>Dados</h2>
        <p class="muted small">Ao bater 1.000 pontos, eles zeram sozinhos e começa outra rodada. "Zerar pontos" zera só os pontos; "Zerar tudo" apaga também histórico e conquistas. O progresso fica salvo neste aparelho.</p>
        <div class="row">
          <button class="btn ghost" id="btnExport">⬇ Exportar backup</button>
          <label class="btn ghost" style="cursor:pointer">⬆ Importar backup<input id="fileImport" type="file" accept="application/json" hidden /></label>
          <button class="btn ghost" id="btnResetPts">↺ Zerar pontos</button>
          <button class="btn danger" id="btnReset">Zerar tudo</button>
        </div>
      </div>
      <p class="muted small" style="margin-top:16px">${CASES.length} casos em ${SPECIALTIES.length} especialidades. Conteúdo educativo, não substitui avaliação médica.</p>`;
  }
  function bindAjustes() {
    $("#btnSave").addEventListener("click", () => {
      state.name = $("#cfgName").value.trim();
      state.perDay = Number($("#cfgPerDay").value);
      save(); toast("✔ Ajustes salvos"); render();
    });
    $("#btnExport").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `plantao-quiz-backup-${today()}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    $("#fileImport").addEventListener("change", async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (typeof data.points !== "number") throw new Error();
        if (!(await confirmBox("Substituir o progresso atual pelo backup?"))) return;
        state = { ...defaultState(), ...data }; save(); toast("✔ Backup importado"); render();
      } catch { toast("Arquivo de backup inválido"); }
    });
    $("#btnResetPts").addEventListener("click", async () => {
      if (!(await confirmBox(`Zerar seus ${fmt(state.points)} pontos? Histórico, acertos e conquistas continuam.`))) return;
      state.points = 0; save(); toast("↺ Pontos zerados"); render();
    });
    $("#btnReset").addEventListener("click", async () => {
      if (!(await confirmBox("Apagar todos os pontos, conquistas e histórico? Não dá para desfazer."))) return;
      state = defaultState(); save(); toast("Progresso zerado"); location.hash = "#/inicio";
    });
  }

  // ---------- Jogador do caso ----------
  let play = null; // { c, mode, step, answers, hints, removed, answered, finished, review }

  function startCase(mode, id) {
    const c = CASE_BY_ID[id];
    if (!c) { location.hash = "#/inicio"; return; }
    if (play && play.c.id === id && play.mode === mode) return; // mantém o andamento
    const plan = todayPlan();
    if (mode === "plantao" && !plan.ids.includes(id)) { location.hash = "#/plantao"; return; }
    let surprise = false;
    if (mode === "plantao" && !isRevealed(plan, id)) {
      plan.revealed = [...(plan.revealed || []), id];
      surprise = true;
      save();
    }
    const prev = mode === "plantao" ? plan.results[id] : null;
    const mult = mode === "sorteio" && state.luck && state.luck.id === id ? state.luck.mult : 1;
    play = { c, mode, mult, surprise, step: 0, answers: [], hints: [], removed: [], answered: false, finished: false, review: !!prev, result: prev || null };
    if (prev) { play.answers = prev.answers; play.hints = prev.hints; play.finished = true; }
  }

  function viewCaso() {
    const { c, mode } = play;
    const head = `
      <div class="card ${play.surprise ? "reveal" : ""}">
        ${play.surprise ? `<div class="reveal-tag">🎁 Caso surpresa revelado!</div>` : ""}
        <div class="case-head">
          <span class="badge esp">${esc(c.esp)}</span>
          <span class="badge d${c.dif}">${DIF_NAME[c.dif]}</span>
          <span class="badge">${mode === "plantao" ? "Plantão do dia" : mode === "sorteio" ? `🎰 Sorteio · sorte ×${play.mult}` : "Treino (metade dos pontos)"}</span>
        </div>
        <h2 style="margin:0">${esc(c.titulo)}</h2>
        <div class="patient">${esc(c.paciente)}</div>
        <p style="margin:0">${esc(c.historia)}</p>
        <div class="vitals">${Object.entries(c.sinais).map(([k, v]) => `<div class="vital"><small>${k === "SatO2" ? "SatO₂" : k}</small><b>${esc(v)}</b></div>`).join("")}</div>
        <h3>Exame físico e exames</h3>
        <ul class="exams">${c.exames.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
      </div>`;

    if (play.finished) return head + viewResult();

    const q = c.perguntas[play.step];
    const chosen = play.answers[play.step];
    const removed = play.removed[play.step] || [];
    const per = DIF_PTS[c.dif];
    const worth = play.hints[play.step] ? Math.round(per / 2) : per;
    const opts = q.op.map((o, i) => {
      let cls = "option";
      if (play.answered) { if (i === q.c) cls += " correct"; else if (i === chosen) cls += " wrong"; }
      else if (removed.includes(i)) cls += " hidden-op";
      const dis = play.answered || removed.includes(i);
      return `<button class="${cls}" data-i="${i}" ${dis ? "disabled" : ""}><span class="letter">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`;
    }).join("");

    let fb = "";
    if (play.answered) {
      const ok = chosen === q.c;
      fb = `<div class="feedback ${ok ? "ok" : "no"}"><strong>${ok ? `✅ Correto! +${mode === "treino" ? Math.round(worth / 2) : mode === "sorteio" ? Math.round((worth / 2) * play.mult) : worth} pts` : "❌ Não foi dessa vez"}</strong>${esc(q.exp)}</div>
        <div class="row" style="margin-top:14px"><span class="spacer"></span><button class="btn" id="btnNext">${play.step + 1 < c.perguntas.length ? "Próxima pergunta →" : "Ver resultado"}</button></div>`;
    }

    return head + `
      <div class="card" style="margin-top:16px">
        <div class="qhead">
          <span class="badge">Pergunta ${play.step + 1} de ${c.perguntas.length}</span>
          ${play.answered ? "" : `<button class="btn soft" id="btnHint" ${play.hints[play.step] ? "disabled" : ""}>💡 Dica <span class="small">(½ pts)</span></button>`}
        </div>
        <div class="progress" style="margin-bottom:14px"><i style="width:${pct(play.step, c.perguntas.length)}%"></i></div>
        <p class="question">${esc(q.p)}</p>
        <div class="options">${opts}</div>
        ${fb}
      </div>`;
  }

  function viewResult() {
    const { c, mode } = play;
    const r = play.result;
    const review = c.perguntas.map((q, i) => {
      const ok = play.answers[i] === q.c;
      return `<div style="padding:12px 0;border-bottom:1px solid var(--line)">
        <b>${ok ? "✅" : "❌"} ${esc(q.p)}</b>${play.hints[i] ? ' <span class="badge">usou dica</span>' : ""}
        ${ok ? "" : `<div class="small" style="color:var(--bad)">Sua resposta: ${esc(q.op[play.answers[i]] ?? "—")}</div>`}
        <div class="small" style="color:var(--good)">Correta: ${esc(q.op[q.c])}</div>
        <div class="small muted">${esc(q.exp)}</div></div>`;
    }).join("");

    let next = "";
    if (mode === "plantao") {
      const plan = todayPlan();
      const n = plan.ids.find((id) => !plan.results[id]);
      next = n ? `<a class="btn" href="#/caso/plantao/${n}">🎁 Próximo caso surpresa →</a>` : `<a class="btn" href="#/inicio">🏁 Plantão concluído!</a>`;
    } else if (mode === "sorteio") {
      next = `<a class="btn" href="#/sorteio">🎰 Girar de novo</a>`;
    } else {
      next = `<button class="btn" id="btnAnother">🎲 Outro caso</button>`;
    }

    return `
      <div class="card" style="margin-top:16px">
        <div class="result-hero">
          <div class="muted">${play.review ? "Caso já atendido hoje" : "Caso concluído"}</div>
          <div class="big">+${r.pts + (r.bonus || 0)} pts</div>
          <div>${r.correct} de ${r.total} acertos${r.perfect ? " · 💯 caso perfeito" : ""}${r.bonus ? ` · 🌙 bônus de plantão +${r.bonus}` : ""}</div>
        </div>
        <h3>Revisão</h3>
        ${review}
        <div class="row" style="margin-top:16px">${next}<a class="btn ghost" href="#/${mode === "plantao" ? "plantao" : mode === "sorteio" ? "inicio" : "treino"}">Voltar</a></div>
      </div>`;
  }

  function bindCaso() {
    document.querySelectorAll(".option").forEach((b) => b.addEventListener("click", () => {
      if (play.answered) return;
      play.answers[play.step] = Number(b.dataset.i);
      play.surprise = false;
      play.answered = true;
      render(false);
    }));
    const hint = $("#btnHint");
    if (hint) hint.addEventListener("click", () => {
      const q = play.c.perguntas[play.step];
      const wrong = q.op.map((_, i) => i).filter((i) => i !== q.c);
      play.removed[play.step] = shuffled(wrong, Math.random).slice(0, 2);
      play.hints[play.step] = true;
      render(false);
    });
    const next = $("#btnNext");
    if (next) next.addEventListener("click", () => {
      play.answered = false;
      if (play.step + 1 < play.c.perguntas.length) { play.step++; }
      else {
        const hints = play.c.perguntas.map((_, i) => !!play.hints[i]);
        play.hints = hints;
        play.result = commitResult(play.c, play.mode, play.answers, hints, play.mult);
        play.finished = true;
      }
      render(false);
      $("#view > .card:last-child")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    const another = $("#btnAnother");
    if (another) another.addEventListener("click", () => {
      const pool = CASES.filter((x) => x.id !== play.c.id && (trainFilter === "Todas" || x.esp === trainFilter));
      const list = pool.length ? pool : CASES;
      const c = list[Math.floor(Math.random() * list.length)];
      play = null;
      location.hash = `#/caso/treino/${c.id}`;
    });
  }

  // ---------- Roleta de sorteio ----------
  const WHEEL_COLORS = ["#0f766e", "#14b8a6", "#0ea5e9", "#6366f1", "#f59e0b", "#ef4444", "#10b981"];
  const ESP_ICON = { Cardiologia: "❤️", Cirurgia: "🔪", Emergência: "🚑", Endocrinologia: "🧪", Gastroenterologia: "🫃", Hematologia: "🩸", Infectologia: "🦠", Nefrologia: "💧", Neurologia: "🧠", Obstetrícia: "🤰", Pediatria: "👶", Pneumologia: "🫁", Reumatologia: "🦴", Toxicologia: "☠️" };
  let wheelRot = 0;
  let spinning = false;
  let sorteioMode = "livre";
  let revealedNow = null; // { id, mult } mostrado após o giro

  function wheelSVG() {
    const n = SPECIALTIES.length, seg = 360 / n, r = 100;
    const pt = (a, rad) => [rad * Math.sin((a * Math.PI) / 180), -rad * Math.cos((a * Math.PI) / 180)];
    let out = "";
    SPECIALTIES.forEach((e, i) => {
      const a0 = i * seg, a1 = (i + 1) * seg, mid = a0 + seg / 2;
      const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r);
      const color = WHEEL_COLORS[i % WHEEL_COLORS.length];
      out += `<path d="M0 0 L${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z" fill="${color}" stroke="#fff" stroke-width="1.2"/>`;
      out += `<g transform="rotate(${(mid - 90).toFixed(2)})"><text x="57" y="2.6" text-anchor="middle" font-size="7.4" fill="#fff" font-weight="700">${esc(e.length > 11 ? e.slice(0, 10) + "." : e)}</text><text x="89" y="3.6" text-anchor="middle" font-size="10" transform="rotate(90 89 0)">${ESP_ICON[e] || "🩺"}</text></g>`;
    });
    return `<svg id="wheel" viewBox="-104 -104 208 208" style="transform:rotate(${wheelRot}deg)">${out}<circle r="104" fill="none" stroke="#fff" stroke-width="5"/></svg>`;
  }

  function pickLivre() {
    const recent = new Set(state.recent || []);
    const pool = CASES.filter((c) => !recent.has(c.id));
    const c = (pool.length ? pool : CASES)[Math.floor(Math.random() * (pool.length || CASES.length))];
    const roll = Math.random();
    const mult = roll < 0.1 ? 3 : roll < 0.4 ? 2 : 1;
    return { id: c.id, mult };
  }

  function sorteioTarget() {
    if (sorteioMode === "plantao") {
      const plan = todayPlan();
      const open = plan.ids.find((id) => !plan.results[id] && isRevealed(plan, id));
      if (open) return { pending: { id: open, mult: 1 } };
      const id = plan.ids.find((x) => !plan.results[x]);
      return id ? { next: { id, mult: 1 } } : { done: true };
    }
    if (state.luck && CASE_BY_ID[state.luck.id]) return { pending: state.luck };
    return { next: null };
  }

  function drawCard(d, fresh) {
    const c = CASE_BY_ID[d.id];
    const href = `#/caso/${sorteioMode === "plantao" ? "plantao" : "sorteio"}/${c.id}`;
    const luck = sorteioMode === "livre"
      ? `<div class="luck l${d.mult}">🍀 Sorte ×${d.mult}${d.mult === 3 ? " — jackpot!" : d.mult === 2 ? " — pontos dobrados!" : ""}</div>` : "";
    return `
      <div class="draw ${fresh ? "pop" : ""}">
        <div class="muted small">${fresh ? "Caso sorteado" : "Caso aguardando atendimento"}</div>
        <div class="draw-esp">${ESP_ICON[c.esp] || "🩺"} ${esc(c.esp)}</div>
        <strong>${esc(c.titulo)}</strong>
        <div class="muted small">${esc(c.paciente)}</div>
        <div class="meta" style="justify-content:center;margin:8px 0"><span class="badge d${c.dif}">${DIF_NAME[c.dif]}</span><span class="badge">${c.perguntas.length} perguntas</span></div>
        ${luck}
        <a class="btn block" style="margin-top:12px" href="${href}">▶ Atender agora</a>
      </div>`;
  }

  function viewSorteio() {
    const t = sorteioTarget();
    const plan = todayPlan();
    const doneN = plan.ids.filter((id) => plan.results[id]).length;
    let below = "", canSpin = true;
    if (revealedNow) { below = drawCard(revealedNow, true); canSpin = false; }
    else if (t.done) { below = `<div class="draw"><b>✓ Plantão de hoje concluído!</b><p class="muted small">Gire no sorteio livre para continuar ganhando pontos.</p><a class="btn block" href="#/sorteio">🎰 Sorteio livre</a></div>`; canSpin = false; }
    else if (t.pending) { below = drawCard(t.pending, false); canSpin = false; }

    const subtitle = sorteioMode === "plantao"
      ? `Plantão do dia · caso ${Math.min(doneN + 1, plan.ids.length)} de ${plan.ids.length}`
      : "Sorteio livre · a sorte multiplica seus pontos de treino (×1, ×2 ou ×3)";
    return `
      <div class="card wheel-card">
        <p class="muted small" style="text-align:center;margin:10px 0 4px">${subtitle}</p>
        <div class="wheel-wrap">
          <div class="pointer"></div>
          ${wheelSVG()}
          <button id="btnSpin" class="spin-btn" ${canSpin ? "" : "disabled"}>GIRAR</button>
        </div>
        <div id="drawOut">${below}</div>
      </div>`;
  }

  function bindSorteio() {
    const btn = $("#btnSpin");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (spinning || btn.disabled) return;
      const t = sorteioTarget();
      if (!t.next && sorteioMode === "plantao") return;
      const pick = t.next || pickLivre();
      const c = CASE_BY_ID[pick.id];
      const n = SPECIALTIES.length, seg = 360 / n;
      const center = SPECIALTIES.indexOf(c.esp) * seg + seg / 2;
      const jitter = (Math.random() - 0.5) * seg * 0.6;
      const base = wheelRot - (wheelRot % 360);
      wheelRot = base + 360 * 6 + ((360 - center - jitter) % 360 + 360) % 360;
      spinning = true;
      btn.disabled = true;
      $("#drawOut").innerHTML = "";
      const wheel = $("#wheel");
      requestAnimationFrame(() => { wheel.style.transform = `rotate(${wheelRot}deg)`; });

      // salva o resultado já, para não perder se fechar o app no meio do giro
      if (sorteioMode === "plantao") {
        const plan = todayPlan();
        plan.revealed = [...new Set([...(plan.revealed || []), pick.id])];
      } else {
        state.luck = pick;
        state.recent = [pick.id, ...(state.recent || []).filter((x) => x !== pick.id)].slice(0, 8);
      }
      save();

      setTimeout(() => {
        spinning = false;
        revealedNow = pick;
        if (navigator.vibrate) navigator.vibrate(pick.mult > 1 ? [60, 40, 120] : 60);
        if (location.hash.startsWith("#/sorteio")) { render(false); $("#drawOut")?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
        renderChips();
      }, 4300);
    });
  }

  // ---------- Instalar no celular ----------
  let installEvt = null;
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvt = e; render(false); });
  window.addEventListener("appinstalled", () => { installEvt = null; toast("📲 App instalado!"); render(false); });
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
  function installCard() {
    if (isStandalone() || window.self !== window.top) return "";
    if (installEvt) return `<div class="card install"><div><b>📲 Instale no celular</b><div class="small muted">Abre em tela cheia, como um app, e funciona sem internet.</div></div><button class="btn" id="btnInstall">Instalar</button></div>`;
    if (isIOS()) return `<div class="card install"><div><b>📲 Instale no iPhone</b><div class="small muted">No Safari, toque em <b>Compartilhar</b> ⬆️ e depois em <b>Adicionar à Tela de Início</b>.</div></div></div>`;
    if (window.matchMedia("(max-width: 720px)").matches) return `<div class="card install"><div><b>📲 Instale no celular</b><div class="small muted">No Chrome, toque no menu <b>⋮</b> e em <b>Instalar app</b> (ou Adicionar à tela inicial).</div></div></div>`;
    return "";
  }
  function bindInstall() {
    const b = $("#btnInstall");
    if (b) b.addEventListener("click", async () => {
      if (!installEvt) return;
      installEvt.prompt();
      await installEvt.userChoice.catch(() => {});
      installEvt = null;
      render(false);
    });
  }

  // ---------- Roteador ----------
  let lastHash = null;
  function render(scrollTop = true) {
    if (spinning && location.hash.startsWith("#/sorteio")) return;
    spinning = false;
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    let route = parts[0] || "inicio";
    if (!TITLES[route]) route = "inicio";

    if (location.hash !== lastHash) { revealedNow = null; lastHash = location.hash; }
    if (route === "caso") startCase(parts[1], parts[2]);
    else play = null;
    if (route === "caso" && !play) return;

    $("#pageTitle").textContent = TITLES[route];
    document.querySelectorAll("#nav a").forEach((a) => {
      const r = a.dataset.route;
      const plantaoSpin = route === "sorteio" && parts[1] === "plantao";
      a.classList.toggle("active", (r === route && !plantaoSpin) || (plantaoSpin && r === "plantao") || (route === "caso" && play && r === play.mode));
    });

    if (route === "sorteio" && parts[1] === "plantao") { location.replace("#/plantao"); return; }
    sorteioMode = "livre";
    const views = { sorteio: viewSorteio, inicio: viewInicio, plantao: viewPlantao, treino: viewTreino, desempenho: viewDesempenho, conquistas: viewConquistas, ajustes: viewAjustes, caso: viewCaso };
    $("#view").innerHTML = views[route]();
    if (route === "treino") bindTreino();
    if (route === "ajustes") bindAjustes();
    if (route === "sorteio") {
      bindSorteio();
      // veio do botão "Sortear": já gira a roleta
      if (parts[1] === "girar") {
        history.replaceState(null, "", "#/sorteio");
        lastHash = location.hash;
        const btn = $("#btnSpin");
        if (btn && !btn.disabled) setTimeout(() => btn.click(), 350);
      }
    }
    if (route === "inicio") bindInstall();
    if (route === "caso") bindCaso();
    renderChips();
    if (scrollTop) window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", () => render());
  // vira o dia com o app aberto
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !play) render(false); });
  render();

  if (!window.EMBED && "serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();

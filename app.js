// Desafio de Pontos — PC e iPhone
// Regra: cada dia vale X pontos (padrão 5). Cada coisa errada tira 1 ponto.
// Atividades extras (que não são obrigação) somam pontos a mais.
// Só contam os dias que já chegaram (a partir da data de início).

const STORAGE_KEY = "desafio-pontos-v1";
const COLORS = ["#7c5cff", "#ff8a3d", "#2ecc71", "#3db8ff", "#ff5c9a", "#f5c518"];

const todayISO = () => toISO(new Date());
function toISO(d) {
  const z = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function parseISO(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function addDays(iso, n) {
  const d = parseISO(iso);
  d.setDate(d.getDate() + n);
  return d;
}
const uid = () => Math.random().toString(36).slice(2, 9);

function person(name, i) {
  return { id: uid(), name, color: COLORS[i % COLORS.length], days: {} };
}

function defaultState() {
  const start = todayISO();
  return {
    active: "c1",
    challenges: [
      { id: "c1", title: "Davi", days: 25, base: 5, goal: 110, start, prize: "", people: [person("Davi", 0)] },
      {
        id: "c2", title: "2 Participantes", days: 30, base: 5, goal: 132, start, prize: "",
        people: [person("Participante 1", 1), person("Participante 2", 3)],
      },
    ],
    ui: {}, // dia selecionado por participante
    undo: [],
  };
}

let state = load();
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (s && s.challenges) return { ...defaultState(), ...s, undo: s.undo || [] };
  } catch {}
  return defaultState();
}
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function snapshot() {
  const { undo, ...rest } = state;
  state.undo.push(JSON.stringify(rest));
  if (state.undo.length > 60) state.undo.shift();
}
function undo() {
  const prev = state.undo.pop();
  if (!prev) return;
  const stack = state.undo;
  state = { ...JSON.parse(prev), undo: stack };
  save();
  render();
}

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtDate = (d) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
const weekday = (d) => d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");

const current = () => state.challenges.find((c) => c.id === state.active) || state.challenges[0];

// Dia de hoje dentro do desafio (0 = ainda não começou)
function currentDay(c) {
  const diff = Math.round((parseISO(todayISO()) - parseISO(c.start)) / 86400000);
  return Math.max(0, Math.min(c.days, diff + 1));
}
function dayData(p, n) {
  return p.days[n] || (p.days[n] = { errors: [], extras: [] });
}
function dayPoints(c, p, n) {
  const d = p.days[n] || { errors: [], extras: [] };
  const extra = d.extras.reduce((s, e) => s + e.pts, 0);
  return { base: c.base, minus: d.errors.length, extra, total: c.base - d.errors.length + extra };
}
function stats(c, p) {
  const today = currentDay(c);
  let total = 0, minus = 0, extra = 0, perfect = 0;
  for (let n = 1; n <= today; n++) {
    const dp = dayPoints(c, p, n);
    total += dp.total; minus += dp.minus; extra += dp.extra;
    if (dp.minus === 0) perfect++;
  }
  const remaining = c.days - today;
  const maxPossible = total + remaining * c.base; // se fizer tudo certo daqui pra frente (sem extras)
  const missing = Math.max(0, c.goal - total);
  const canLose = maxPossible - c.goal; // quantos pontos ainda pode perder e bater a meta
  const done = today >= c.days;
  let status;
  if (total >= c.goal) status = done ? "won" : "reached";
  else if (done) status = "lost";
  else if (canLose < 0) status = "danger"; // só com extras
  else status = "ok";
  return { today, total, minus, extra, perfect, remaining, maxPossible, missing, canLose, status };
}

// ---------- Ações ----------
function addError(pid, n, note) {
  const p = current().people.find((x) => x.id === pid);
  snapshot();
  dayData(p, n).errors.push({ note: note || "", t: Date.now() });
  save(); render(); buzz();
}
function addExtra(pid, n, pts, note) {
  const p = current().people.find((x) => x.id === pid);
  snapshot();
  dayData(p, n).extras.push({ pts, note: note || "", t: Date.now() });
  save(); render(); buzz();
}
function removeItem(pid, n, kind, idx) {
  const p = current().people.find((x) => x.id === pid);
  snapshot();
  dayData(p, n)[kind].splice(idx, 1);
  save(); render();
}
function buzz() { try { navigator.vibrate && navigator.vibrate(15); } catch {} }

// ---------- Render ----------
function render() {
  const c = current();
  $("#btnUndo").disabled = !state.undo.length;

  $("#tabs").innerHTML = state.challenges
    .map((x) => `<button class="tab ${x.id === c.id ? "on" : ""}" data-tab="${x.id}">${esc(x.title)} <small>${x.days} dias</small></button>`)
    .join("");

  const today = currentDay(c);
  const end = addDays(c.start, c.days - 1);
  $("#summary").innerHTML = `
    <div><span class="muted">Dia</span> <strong>${today}</strong><span class="muted">/${c.days}</span></div>
    <div><span class="muted">Meta</span> <strong>${c.goal}</strong> <span class="muted">pts</span></div>
    <div><span class="muted">${fmtDate(parseISO(c.start))} → ${fmtDate(end)}</span></div>
    ${c.prize ? `<div>🎁 <strong>${esc(c.prize)}</strong></div>` : ""}
    ${today === 0 ? `<div class="warn">O desafio começa em ${fmtDate(parseISO(c.start))}</div>` : ""}`;

  const all = c.people.map((p) => ({ p, s: stats(c, p) }));
  const ranked = [...all].sort((a, b) => b.s.total - a.s.total);
  const showRank = c.people.length > 1;

  $("#board").innerHTML = all.length
    ? all.map(({ p, s }) => card(c, p, s, showRank ? 1 + ranked.filter((r) => r.s.total > s.total).length : 0, ranked)).join("")
    : `<div class="empty">Nenhum participante. Toque em ⚙️ para adicionar.</div>`;
  $("#board").classList.toggle("single", all.length === 1);
}

function statusLine(c, s) {
  switch (s.status) {
    case "won": return `<div class="status good">🏆 Desafio concluído! Ganhou o prêmio!</div>`;
    case "reached": return `<div class="status good">🎉 Já bateu a meta! Continue assim até o fim.</div>`;
    case "lost": return `<div class="status bad">Desafio terminou — faltaram ${s.missing} pontos.</div>`;
    case "danger": return `<div class="status bad">⚠️ Só dá pra chegar na meta com atividades extras: faltam ${s.missing} pts e restam ${s.remaining} dias (${s.remaining * c.base} pts).</div>`;
    default: return `<div class="status">Faltam <strong>${s.missing}</strong> pts · ainda pode perder até <strong>${s.canLose}</strong> pts e ganhar o prêmio</div>`;
  }
}

function card(c, p, s, pos, ranked) {
  const sel = Math.min(Math.max(1, state.ui[p.id] || s.today || 1), c.days);
  const pct = Math.min(100, Math.max(0, (s.total / c.goal) * 100));
  const medal = pos ? ["🥇", "🥈", "🥉"][pos - 1] || `${pos}º` : "";
  const leader = pos === 1 && ranked.length > 1 && ranked[0].s.total > ranked[1].s.total;

  const chips = Array.from({ length: c.days }, (_, i) => {
    const n = i + 1;
    let cls = "future";
    if (n <= s.today) {
      const dp = dayPoints(c, p, n);
      cls = dp.minus === 0 ? "perfect" : dp.total >= c.base - 2 ? "meh" : "badday";
      if (dp.extra > 0) cls += " star";
    }
    return `<button class="chip ${cls} ${n === sel ? "sel" : ""} ${n === s.today ? "today" : ""}" data-day="${n}" title="Dia ${n} — ${fmtDate(addDays(c.start, n - 1))}">${n}</button>`;
  }).join("");

  const isFuture = sel > s.today;
  const d = p.days[sel] || { errors: [], extras: [] };
  const dp = dayPoints(c, p, sel);
  const date = addDays(c.start, sel - 1);

  const items = [
    ...d.errors.map((e, i) => `<li class="neg"><span>−1 ${esc(e.note || "Coisa errada")}</span><button class="x" data-rm="errors:${i}" title="Remover">✕</button></li>`),
    ...d.extras.map((e, i) => `<li class="pos"><span>+${e.pts} ${esc(e.note || "Atividade extra")}</span><button class="x" data-rm="extras:${i}" title="Remover">✕</button></li>`),
  ].join("");

  return `
  <article class="card ${leader ? "leader" : ""}" style="--c:${p.color}" data-pid="${p.id}">
    <div class="card-head">
      <span class="name">${leader ? "👑 " : ""}${esc(p.name)}</span>
      ${medal ? `<span class="medal">${medal}</span>` : ""}
    </div>

    <div class="score-row">
      <div class="score">${s.total}<span>/${c.goal}</span></div>
      <div class="mini">
        <div>✅ ${s.perfect} ${s.perfect === 1 ? "dia perfeito" : "dias perfeitos"}</div>
        <div>❌ −${s.minus} ${s.minus === 1 ? "erro" : "erros"}</div>
        <div>⭐ +${s.extra} extras</div>
      </div>
    </div>
    <div class="progress"><div style="width:${pct}%"></div></div>
    ${statusLine(c, s)}

    <div class="chips">${chips}</div>

    <div class="day ${isFuture ? "locked" : ""}">
      <div class="day-head">
        <strong>Dia ${sel}</strong> <span class="muted">${weekday(date)}, ${fmtDate(date)}</span>
        <span class="day-total ${dp.total < c.base ? "low" : ""}">${isFuture ? "—" : `${dp.total} pts`}</span>
      </div>
      ${isFuture ? `<p class="muted">Esse dia ainda não chegou.</p>` : `
      <p class="muted small">Começa com ${c.base} pontos se fizer tudo o que foi combinado.</p>
      <input class="note" type="text" maxlength="40" placeholder="O que aconteceu? (opcional)" />
      <div class="actions">
        <button class="minus" data-err>−1 Coisa errada</button>
        <button class="plus" data-extra="1">+1 Extra</button>
        <button class="plus" data-extra="2">+2</button>
        <button class="plus" data-extra="5">+5</button>
      </div>
      ${items ? `<ul class="items">${items}</ul>` : `<p class="muted small">Nada registrado neste dia — ${c.base} pontos garantidos. 👏</p>`}`}
    </div>
  </article>`;
}

// ---------- Eventos ----------
$("#tabs").addEventListener("click", (e) => {
  const b = e.target.closest("[data-tab]");
  if (!b) return;
  state.active = b.dataset.tab;
  save(); render();
});

$("#board").addEventListener("click", (e) => {
  const cardEl = e.target.closest(".card");
  if (!cardEl) return;
  const pid = cardEl.dataset.pid;
  const c = current();
  const s = stats(c, c.people.find((x) => x.id === pid));
  const sel = Math.min(Math.max(1, state.ui[pid] || s.today || 1), c.days);
  const note = () => (cardEl.querySelector(".note")?.value || "").trim();

  const chip = e.target.closest("[data-day]");
  if (chip) { state.ui[pid] = Number(chip.dataset.day); save(); render(); return; }
  if (e.target.closest("[data-err]")) return addError(pid, sel, note());
  const ex = e.target.closest("[data-extra]");
  if (ex) return addExtra(pid, sel, Number(ex.dataset.extra), note());
  const rm = e.target.closest("[data-rm]");
  if (rm) {
    const [kind, idx] = rm.dataset.rm.split(":");
    return removeItem(pid, sel, kind, Number(idx));
  }
});

$("#btnUndo").addEventListener("click", undo);
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !/input|textarea/i.test(e.target.tagName)) {
    e.preventDefault(); undo();
  }
});

// Configurações
$("#btnSettings").addEventListener("click", () => {
  const c = current();
  $("#cfgTitle").value = c.title;
  $("#cfgDays").value = c.days;
  $("#cfgBase").value = c.base;
  $("#cfgGoal").value = c.goal;
  $("#cfgStart").value = c.start;
  $("#cfgPrize").value = c.prize || "";
  $("#cfgPeople").value = c.people.map((p) => p.name).join("\n");
  $("#settings").showModal();
});
$("#settings").addEventListener("close", () => {
  if ($("#settings").returnValue !== "ok") return;
  const c = current();
  const names = $("#cfgPeople").value.split("\n").map((s) => s.trim()).filter(Boolean).slice(0, 8);
  const removed = c.people.length > names.length ? c.people.slice(names.length) : [];
  const apply = () => {
    snapshot();
    c.title = $("#cfgTitle").value.trim() || c.title;
    c.days = Math.max(1, parseInt($("#cfgDays").value, 10) || c.days);
    c.base = Math.max(1, parseInt($("#cfgBase").value, 10) || c.base);
    c.goal = Math.max(1, parseInt($("#cfgGoal").value, 10) || c.goal);
    c.start = $("#cfgStart").value || c.start;
    c.prize = $("#cfgPrize").value.trim();
    c.people = names.map((n, i) => (c.people[i] ? { ...c.people[i], name: n } : person(n, i)));
    save(); render();
  };
  if (removed.some((p) => Object.keys(p.days).length)) {
    askConfirm(`Remover ${removed.map((p) => p.name).join(", ")} e apagar os pontos registrados?`, apply);
  } else apply();
});

function askConfirm(text, onOk) {
  $("#confirmText").textContent = text;
  const dlg = $("#confirm");
  dlg.onclose = () => { if (dlg.returnValue === "ok") onOk(); };
  dlg.showModal();
}

// Atualiza o "dia de hoje" quando vira a meia-noite
let lastDay = todayISO();
setInterval(() => { if (todayISO() !== lastDay) { lastDay = todayISO(); render(); } }, 60000);

// PWA offline (ignorado onde não é permitido)
try {
  if ("serviceWorker" in navigator && location.protocol === "https:" && !location.hostname.endsWith("claude.ai")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
} catch {}

render();

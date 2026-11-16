// Placar — app de contagem de pontos (PC e iPhone)
const COLORS = ["#7c5cff", "#ff5c6c", "#2ecc71", "#f5a623", "#3db8ff", "#ff6ad5", "#00d2b4", "#c0e000"];
const STORAGE_KEY = "placar-v1";

const defaultState = () => ({
  players: [],
  goal: 100,
  steps: [1, 5, 10],
  lowWins: false,
  round: 1,
  history: [],
  undo: [],
  winnerShown: false,
});

let state = load();

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState(), ...saved } : defaultState();
  } catch {
    return defaultState();
  }
}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

function snapshot() {
  const { undo, ...rest } = state;
  state.undo.push(JSON.stringify(rest));
  if (state.undo.length > 50) state.undo.shift();
}

function undo() {
  const prev = state.undo.pop();
  if (!prev) return;
  const undoStack = state.undo;
  state = { ...JSON.parse(prev), undo: undoStack };
  save();
  render();
}

const $ = (s) => document.querySelector(s);
const uid = () => Math.random().toString(36).slice(2, 9);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const time = () => new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

function addPlayer(name) {
  name = name.trim();
  if (!name) return;
  snapshot();
  state.players.push({ id: uid(), name, score: 0, color: COLORS[state.players.length % COLORS.length] });
  save();
  render();
}

function removePlayer(id) {
  const p = state.players.find((x) => x.id === id);
  if (!p || !confirm(`Remover ${p.name}?`)) return;
  snapshot();
  state.players = state.players.filter((x) => x.id !== id);
  save();
  render();
}

function addPoints(id, amount) {
  const p = state.players.find((x) => x.id === id);
  if (!p || !amount) return;
  snapshot();
  p.score += amount;
  state.history.unshift(`${time()} · R${state.round} · ${p.name} ${amount > 0 ? "+" : ""}${amount} → ${p.score}`);
  state.history = state.history.slice(0, 200);
  save();
  render(id);
  checkWinner();
  if (navigator.vibrate) navigator.vibrate(15);
}

function leaderIds() {
  if (!state.players.length) return [];
  const scores = state.players.map((p) => p.score);
  const best = state.lowWins ? Math.min(...scores) : Math.max(...scores);
  if (state.players.every((p) => p.score === 0)) return [];
  return state.players.filter((p) => p.score === best).map((p) => p.id);
}

function checkWinner() {
  if (state.winnerShown) return;
  let winner;
  if (state.lowWins) {
    // No modo "menor vence", o jogo acaba quando alguém atinge a meta; vence quem tem menos.
    if (state.players.some((p) => p.score >= state.goal)) {
      winner = [...state.players].sort((a, b) => a.score - b.score)[0];
    }
  } else {
    const reached = state.players.filter((p) => p.score >= state.goal).sort((a, b) => b.score - a.score);
    winner = reached[0];
  }
  if (winner) {
    state.winnerShown = true;
    save();
    $("#winnerName").textContent = winner.name;
    $("#winner").classList.remove("hidden");
  }
}

function nextRound() {
  snapshot();
  state.round += 1;
  state.history.unshift(`${time()} · —— Início da rodada ${state.round} ——`);
  save();
  render();
}

function newGame() {
  if (!confirm("Começar um novo jogo? Os pontos serão zerados (os jogadores continuam).")) return;
  snapshot();
  state.players.forEach((p) => (p.score = 0));
  state.round = 1;
  state.history = [];
  state.winnerShown = false;
  save();
  render();
}

function render(bumpId) {
  $("#goalLabel").textContent = state.goal;
  $("#roundLabel").textContent = `Rodada ${state.round}`;
  $("#btnUndo").disabled = !state.undo.length;

  const box = $("#players");
  if (!state.players.length) {
    box.innerHTML = `<div class="empty">Adicione os jogadores abaixo para começar 🎮</div>`;
    return;
  }

  const leaders = leaderIds();
  const steps = state.steps.length ? state.steps : [1];
  const ranking = [...state.players].sort((a, b) => (state.lowWins ? a.score - b.score : b.score - a.score));

  box.innerHTML = state.players
    .map((p) => {
      const pos = ranking.findIndex((r) => r.id === p.id) + 1;
      const pct = Math.max(0, Math.min(100, (p.score / state.goal) * 100));
      const minus = [...steps].reverse().map((s) => `<button class="minus" data-add="${-s}">−${s}</button>`).join("");
      const plus = steps.map((s) => `<button class="plus" data-add="${s}">+${s}</button>`).join("");
      return `
        <article class="card ${leaders.includes(p.id) ? "leader" : ""}" style="--c:${p.color}" data-id="${p.id}">
          <div class="card-head">
            <span class="name">${leaders.includes(p.id) ? "👑 " : ""}${esc(p.name)}</span>
            <span class="badge">${pos}º</span>
            <button class="remove" data-remove title="Remover">✕</button>
          </div>
          <div class="score ${bumpId === p.id ? "bump" : ""}" data-custom title="Toque para digitar um valor">${p.score}</div>
          <div class="progress"><div style="width:${pct}%"></div></div>
          <div class="btns" style="--n:${steps.length * 2}">${minus}${plus}</div>
        </article>`;
    })
    .join("");
}

// ---------- Eventos ----------
$("#players").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const id = card.dataset.id;
  if (e.target.dataset.add) addPoints(id, Number(e.target.dataset.add));
  else if (e.target.hasAttribute("data-remove")) removePlayer(id);
  else if (e.target.hasAttribute("data-custom")) openCustom(id);
});

$("#addForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addPlayer($("#newName").value);
  $("#newName").value = "";
});

$("#btnUndo").addEventListener("click", undo);
$("#btnNextRound").addEventListener("click", nextRound);
$("#btnNewGame").addEventListener("click", newGame);
$("#btnWinnerClose").addEventListener("click", () => $("#winner").classList.add("hidden"));

// Valor personalizado
let customFor = null;
function openCustom(id) {
  customFor = id;
  const p = state.players.find((x) => x.id === id);
  $("#customTitle").textContent = `Pontos para ${p.name}`;
  $("#customInput").value = "";
  $("#custom").showModal();
  setTimeout(() => $("#customInput").focus(), 50);
}
$("#custom").addEventListener("close", () => {
  if ($("#custom").returnValue === "ok") addPoints(customFor, parseInt($("#customInput").value, 10) || 0);
});

// Configurações
$("#btnMenu").addEventListener("click", () => {
  $("#goalInput").value = state.goal;
  $("#stepsInput").value = state.steps.join(", ");
  $("#lowWinsInput").checked = state.lowWins;
  $("#history").innerHTML = state.history.length
    ? state.history.map((h) => `<li>${esc(h)}</li>`).join("")
    : "<li>Nenhuma jogada ainda.</li>";
  $("#settings").showModal();
});
$("#settings").addEventListener("close", () => {
  const goal = parseInt($("#goalInput").value, 10);
  const steps = $("#stepsInput").value
    .split(",")
    .map((s) => Math.abs(parseInt(s, 10)))
    .filter((n) => n > 0)
    .slice(0, 4);
  if (goal > 0) state.goal = goal;
  if (steps.length) state.steps = steps;
  state.lowWins = $("#lowWinsInput").checked;
  state.winnerShown = false;
  save();
  render();
  checkWinner();
});
$("#btnResetAll").addEventListener("click", () => {
  if (!confirm("Apagar jogadores, pontos e histórico?")) return;
  state = defaultState();
  save();
  $("#settings").close();
  render();
});

// Atalhos no PC
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
    e.preventDefault();
    undo();
  }
});

// PWA offline
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

render();

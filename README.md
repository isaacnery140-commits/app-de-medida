# 🩺 Plantão Quiz — Casos Clínicos

Jogo de casos clínicos: todo dia aparece um **plantão** com novos casos para resolver.
Cada resposta certa vale pontos, você sobe de nível, mantém sequência de dias e desbloqueia conquistas.
Funciona no **PC**, **Android** e **iPhone** como app instalável (PWA), inclusive offline.

> Conteúdo educativo. Não substitui avaliação médica.

## Telas

| Tela | O que tem |
|---|---|
| **Início** | Pontos, nível, sequência, % de acertos, plantão de hoje, gráfico dos últimos 14 dias e especialidades para revisar |
| **Plantão do dia** | Casos sorteados para o dia (3, 5, 8 ou 10 — escolha em Ajustes). Muda todo dia |
| **Treino livre** | Qualquer caso, filtrando por especialidade, ou caso aleatório |
| **Desempenho** | Acertos por especialidade |
| **Conquistas** | 10 medalhas para desbloquear |
| **Ajustes** | Nome, casos por dia, backup e zerar progresso |

## Pontuação

- Acerto: **Fácil 10**, **Médio 15**, **Difícil 20** pontos.
- **Dica** elimina 2 alternativas, mas a pergunta passa a valer metade.
- **Caso perfeito** (tudo certo sem dica): bônus de 5 × dificuldade.
- **Plantão completo**: +20 pontos, mais +2 por dia de sequência (até +14).
- **Treino livre** vale metade dos pontos.
- Níveis: Estudante → Interno → Residente R1/R2/R3 → Especialista → Preceptor → Chefe de Plantão → Lenda da Medicina.

## Como adicionar casos

Edite `cases.js` e copie um caso existente. Campos: `esp` (especialidade), `dif` (1, 2 ou 3),
`titulo`, `paciente`, `historia`, `sinais`, `exames` e `perguntas` (cada uma com `p`, `op`, `c` = índice da correta, `exp` = explicação).

## Como rodar no PC

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Publicação

O app é publicado pelo **GitHub Pages** (Settings → Pages → Branch `main` / pasta raiz).
Para instalar: abra o link no Chrome (Android/PC: menu → *Instalar app*) ou no Safari (iPhone: Compartilhar → *Adicionar à Tela de Início*).

## Estrutura

```
index.html            página principal
style.css             visual
app.js                lógica do jogo (pontos, níveis, plantão diário)
cases.js              banco de casos clínicos
manifest.webmanifest  configuração do app instalável
sw.js                 funcionamento offline
icons/                ícones do app
```

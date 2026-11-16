# 🏆 Placar — App de Medida de Pontos

App para marcar pontos em jogos (cartas, tabuleiro, truco, partidas entre amigos...).
Funciona no **PC** e no **iPhone** como um web app instalável (PWA), inclusive offline.

## Funcionalidades

- Adicionar e remover jogadores (cada um com sua cor)
- Botões de **+1 / +5 / +10** e **−1 / −5 / −10** (valores configuráveis)
- Toque no placar para digitar um valor personalizado (ex.: +25, −10)
- **Meta de pontos**: quando alguém chega lá, aparece a tela de vencedor 🎉
- Modo **"menor pontuação vence"** (tipo golfe)
- Ranking com 👑 para quem está liderando e barra de progresso até a meta
- Contador de **rodadas** e **histórico** de todas as jogadas
- **Desfazer** (botão ou `Ctrl+Z` no PC)
- Tudo fica salvo no aparelho, mesmo fechando o app

## Como rodar no PC

Abra um terminal na pasta do projeto e rode:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador. No Chrome/Edge dá para clicar em
**Instalar app** na barra de endereço.

## Como instalar no iPhone

1. Publique o app em um endereço `https://` (por exemplo GitHub Pages, Netlify ou Vercel).
2. Abra o endereço no **Safari**.
3. Toque em **Compartilhar → Adicionar à Tela de Início**.

O app abre em tela cheia, como um app nativo.

## Estrutura

```
index.html            página principal
style.css             visual
app.js                lógica do placar
manifest.webmanifest  configuração do app instalável
sw.js                 funcionamento offline
icons/                ícones do app
```

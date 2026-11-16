# 🏆 Desafio de Pontos

App de desafio de pontos por dia, com prêmio no final.
Funciona no **PC** e no **iPhone** como um web app instalável (PWA), inclusive offline.

## Como funciona

Duas telas de desafio:

| Tela | Participantes | Duração | Meta para o prêmio |
|---|---|---|---|
| **Davi** | Davi | 25 dias | 110 pontos |
| **2 Participantes** | 2 pessoas (nomes editáveis em ⚙️) | 30 dias | 132 pontos |

Regras (iguais nas duas telas):

- Cada dia vale **5 pontos** se fizer tudo o que foi combinado.
- Cada **coisa errada tira 1 ponto** daquele dia (dá para anotar o motivo).
- **Atividades extras** (que não são obrigação) dão **+1, +2 ou +5** pontos.
- Os dias contam automaticamente a partir da data de início.
- O app mostra quantos pontos faltam e **quanto ainda pode perder** para ganhar o prêmio.
- Calendário com cores: verde = dia perfeito, amarelo = poucos erros, vermelho = dia ruim, ⭐ = teve extra.
- Tudo é configurável em ⚙️: nome, dias, pontos por dia, meta, data de início, prêmio e participantes.
- **Desfazer** (botão ou `Ctrl+Z` no PC). Os dados ficam salvos no aparelho.

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

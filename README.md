# SistemaCenter Landing + Vite Project

Projeto contendo duas partes:

- Landing estática na raiz (`index.html`, `styles.css`, `script.js`, `assets/`).
- Subprojeto `vite-project/` para desenvolvimento com Vite (HMR), TypeScript e build.

## Estrutura

```
/ (raiz)
├─ assets/
├─ index.html
├─ styles.css
├─ script.js
└─ vite-project/
   ├─ index.html
   ├─ package.json
   ├─ src/
   └─ public/
```

## Rodando

- Landing estática:
  - Abra `index.html` direto no navegador ou sirva com qualquer servidor estático.
- Dev com Vite (HMR):
  - `cd vite-project`
  - `npm install`
  - `npm run dev` (abre em `http://localhost:5174/`)

## Build

- `cd vite-project`
- `npm run build` (gera `vite-project/dist/`)

## Publicação

- GitHub Pages: publique o conteúdo de `vite-project/dist/` ou configure diretamente o subprojeto.
- Evite versionar `node_modules` e `dist` (veja `.gitignore`).

## Tema

- Suporte a tema claro/escuro com toggle no header.
- Persistência em `localStorage` e respeito ao `prefers-color-scheme`.

## Requisitos

- Node.js 18+
- Vite 5.x (ajustado no `vite-project/package.json`)

## Como contribuir

1. `git clone <repo>`
2. Crie uma branch: `git checkout -b feat/xyz`
3. Faça commits e abra um PR.

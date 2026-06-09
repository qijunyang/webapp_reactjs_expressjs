# WebApp React + Express

## Project overview

This repository contains a minimal starter structure for a React frontend and an Express backend.

## Folder structure

```text
webapp_reactjs_expressjs/
├── backend/
│   ├── package.json
│   └── src/
│       └── server.js
├── e2e/
│   ├── package.json
│   ├── playwright.config.js
│   └── tests/
│       └── app.spec.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       └── main.jsx
└── README.md
```

## How to start backend

```bash
cd backend
npm install
npm start
```

The backend runs on `http://localhost:3001` and exposes `GET /health`.

## How to start frontend

```bash
cd frontend
npm install
npm run build
```

The frontend is built into `frontend/dist/` and served as static files by the backend.

## How to run E2E tests

First build the frontend, then run Playwright from the `e2e/` directory:

```bash
cd frontend && npm run build && cd -
cd e2e
npm install
npx playwright install chromium
npm test
```


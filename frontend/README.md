# Tiny Therapist, Big Boundaries

Next.js frontend for the AI mental wellness companion backed by `/api/index.py`.

## Run locally

1. Start the backend from the repository root:

```bash
uv run uvicorn api.index:app --reload
```

2. Install and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

During development, Next.js rewrites `/api/chat` to the local FastAPI server on port 8000.

## Production build

```bash
npm run build
npm start
```

## Notes

- The UI is a responsible AI coach demo. It does not diagnose, treat, or replace therapy.
- Quick support buttons and mood chips are frontend-only states for now.
- Deploy from the repository root with Vercel and set `AZURE_GPT_KEY` in project environment variables.

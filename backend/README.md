# Arkin Design — Backend

FastAPI service for Arkin Design. Currently exposes a small set of `/api/status` endpoints; designed to host future lead-capture, projects and admin APIs.

## Stack
- FastAPI + Uvicorn
- Motor (async MongoDB driver)
- Pydantic v2

## Local development

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env       # fill in MONGO_URL / DB_NAME / CORS_ORIGINS
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

API base path: `http://localhost:8001/api`

## Environment variables

| Key | Description |
|-----|-------------|
| `MONGO_URL` | MongoDB connection string (MongoDB Atlas recommended) |
| `DB_NAME` | Database name (e.g. `arkin_design`) |
| `CORS_ORIGINS` | Comma-separated list of allowed origins (e.g. `https://arkin-design.vercel.app`) |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/` | Health check (returns `{ "message": "Hello World" }`) |
| POST | `/api/status` | Create a status check |
| GET | `/api/status` | List status checks |

## Deploy to Render

1. Push this folder to a GitHub repo (e.g. `interior-design-backend`).
2. On [render.com](https://render.com) → **New +** → **Web Service** → connect the repo.
3. Render auto-detects `render.yaml`. If not, set manually:
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
4. Add env vars (`MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`).
5. **Create Web Service**.

### MongoDB

Render does not host MongoDB. Use **MongoDB Atlas** (free tier):

1. Create a cluster on [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a DB user
3. Whitelist `0.0.0.0/0` in Network Access (Render IPs are dynamic)
4. Copy the connection string into `MONGO_URL`

### CORS

Once your Vercel domain is known, set `CORS_ORIGINS` to that domain. Multiple origins can be comma-separated.

## Project structure

```
backend/
├── server.py              # FastAPI app + routes (mounted at /api)
├── requirements.txt
├── render.yaml            # Render deployment config
└── .env.example
```

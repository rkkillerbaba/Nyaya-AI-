# Nyaya-AI Prototype

## Overview
Nyaya-AI is a proof-of-concept legal tech app that provides role-based dashboards for citizens, lawyers, judges, and court employees.

This project includes:
- Next.js frontend (in `frontend/`)
- Express backend (in `backend/`)
- Shared mock data (`shared/`)

## Setup Instructions

1. **Install dependencies**
```bash
npm install
```

2. **Run backend**
```bash
cd backend
node server.js
```

3. **Run frontend**
```bash
cd frontend
npm run dev
```

## Notes
- OTP flow uses a **mock OTP**: always `123456`.
- JWT secret is hardcoded for demo purposes.
- Replace `/api/ai/analyze` with real AI integration (e.g., OpenAI, LangChain).
- Replace Aadhaar/mobile verification with real UIDAI or SMS provider.
- Do NOT use this demo in production.

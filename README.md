# Sahaaya 🌱

A voice-first AI assistant for first-time women internet users, helping them understand and navigate **PM Ujjwala Yojana 2.0** in a regional language.

## Hackathon alignment

- One essential government scheme
- Voice + simple text interaction
- Regional-language responses
- No prior digital knowledge required
- Gemini-powered conversational guidance
- Public Cloud Run deployment
- Privacy guardrails: never request Aadhaar numbers, OTPs, passwords or bank numbers

## Run locally

Python 3.11+

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
```

Create a `.env` or set the environment variable:

```bash
GEMINI_API_KEY=YOUR_KEY
```

Then:

```bash
python app.py
```

Open http://localhost:8080

## Deploy to Cloud Run

Google Cloud CLI:

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

gcloud run deploy sahaaya --source . --region asia-south1 --allow-unauthenticated --set-env-vars GEMINI_API_KEY=YOUR_KEY
```

Do not put the API key into GitHub. For a production deployment, use Secret Manager instead of a plain environment variable.

## Demo flow

1. Open the app.
2. Keep Tamil selected.
3. Press the microphone.
4. Ask: "இந்த திட்டத்திற்கு நான் தகுதியானவரா?" (Am I eligible?)
5. Ask: "என்ன ஆவணங்கள் வேண்டும்?" (What documents do I need?)
6. Ask: "எப்படி விண்ணப்பிப்பது?" (How do I apply?)
7. Show the official PMUY link.
8. Explain that the app guides the user and does not submit an application.

## Official source

https://www.pmuy.gov.in/

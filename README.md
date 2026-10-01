# 🌐 Live Demo

**https://sahaaya-ai-7ty0.onrender.com**

# Sahaaya 🌱

### Voice-first AI assistance for first-time women internet users

Sahaaya is an AI-powered, voice-first assistant designed to help first-time women internet users understand and navigate essential government services without requiring prior digital knowledge or English proficiency.

For this hackathon MVP, Sahaaya focuses on **Pradhan Mantri Ujjwala Yojana 2.0 (PMUY)** and provides simple guidance in regional languages.

## 🚀 Live Demo

**https://sahaaya-ai-7ty0.onrender.com**

## 💡 Problem

Many first-time internet users face barriers such as:

- Limited digital literacy
- Lack of English proficiency
- Difficulty understanding government schemes
- Lack of someone to guide them through online services

Sahaaya addresses this by providing conversational, regional-language assistance through simple text and voice interaction.

## ✨ Features

- 🎙️ Voice-first interaction
- 💬 Simple conversational text interface
- 🌐 Regional language support: Tamil, Telugu and Hindi
- 🤖 Gemini-powered AI guidance
- 📋 PMUY eligibility guidance
- 📄 Required-document guidance
- 📝 Step-by-step application guidance
- 🎁 Explanation of scheme benefits
- 🔐 Privacy-first design
- 🚫 Never asks users to provide Aadhaar numbers, OTPs, passwords or bank account numbers
- 🔗 Direct access to the official PMUY website
- 📱 Designed for users with zero prior digital knowledge

## 🏗️ Technology Stack

**Frontend**
- HTML
- CSS
- JavaScript
- Browser Speech Recognition
- Browser Speech Synthesis

**Backend**
- Python
- Flask
- Gunicorn

**AI**
- Google Gemini API

**Deployment**
- Render

## 🔄 How It Works

```text
User
  ↓
Voice / Text Input
  ↓
Sahaaya Web Interface
  ↓
Flask Backend
  ↓
Google Gemini
  ↓
Simple Regional-Language Response
  ↓
Text + Voice Output
```

## 🎯 Demo Flow

1. Open the live application.
2. Select a preferred language.
3. Ask whether you are eligible for PMUY.
4. Ask what documents are required.
5. Ask how to apply.
6. Ask what benefits are available.
7. Follow the simple guidance provided by Sahaaya.
8. Visit the official PMUY website when ready to proceed.

Sahaaya provides guidance and **does not submit an application on behalf of the user**.

## 🔐 Privacy & Safety

Sahaaya is designed with privacy in mind.

The assistant does **not** request or process:

- Aadhaar numbers
- OTPs
- Passwords
- Bank account numbers
- Other sensitive personal credentials

Users are directed to the official government website for the actual application process.

## 🛠️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/praneethak06/sahaaya-ai.git
cd sahaaya-ai
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Windows:

```bash
.venv\Scripts\activate
```

macOS/Linux:

```bash
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Gemini API

Set the environment variable:

```text
GEMINI_API_KEY=YOUR_API_KEY
```

Do **not** commit the API key to GitHub.

### 5. Run the application

```bash
python app.py
```

Open:

```text
http://localhost:8080
```

## 📁 Project Structure

```text
sahaaya-ai/
│
├── app.py
├── requirements.txt
├── Dockerfile
├── .env.example
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── app.js
    └── style.css
```

## 🌍 Scalability

The current MVP focuses on PMUY, but the same architecture can be extended to additional government schemes and essential services by adding verified scheme-specific knowledge and guided workflows.

## 🎯 SDG Alignment

Sahaaya supports the goals of:

- **SDG 5:** Gender Equality
- **SDG 4:** Quality Education
- **SDG 10:** Reduced Inequalities

## 🔗 Official Government Source

Pradhan Mantri Ujjwala Yojana:

https://www.pmuy.gov.in/

## 👩‍💻 Repository

https://github.com/praneethak06/sahaaya-ai

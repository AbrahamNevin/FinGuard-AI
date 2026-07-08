# FinGuard AI

> **An AI-Powered Credit Risk Assessment Platform with Explainable AI and Conversational Intelligence**

FinGuard AI is an end-to-end full-stack application that predicts the credit risk of a customer using Machine Learning, explains the prediction using SHAP (Explainable AI), and allows users to interact with an AI-powered assistant for human-friendly explanations and financial insights.

---

# 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Machine Learning Pipeline](#machine-learning-pipeline)
- [Explainable AI](#explainable-ai)
- [AI Assistant](#ai-assistant)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Current Progress](#current-progress)
- [Future Improvements](#future-improvements)
- [Learning Outcomes](#learning-outcomes)
- [License](#license)

---

# Overview

Financial institutions rely on credit scoring systems to determine whether a customer is likely to default on a loan or credit card payment. Traditional machine learning models often act as black boxes, making it difficult to understand **why** a prediction was made.

FinGuard AI addresses this challenge by combining:

- **Machine Learning** for accurate credit risk prediction
- **Explainable AI (SHAP)** for transparent decision-making
- **Google Gemini** for conversational AI explanations
- **FastAPI** backend for scalable inference
- **Next.js** frontend for an intuitive user experience

The platform predicts the probability of default while providing understandable explanations for both technical and non-technical users.

---

# Features

## Machine Learning

- Credit Risk Prediction
- XGBoost Classification Model
- Probability-Based Risk Assessment
- Feature Engineering Pipeline
- Saved Model Inference using Joblib

---

## Explainable AI

- SHAP Integration
- Feature Contribution Analysis
- Human-readable Explanations
- Model Transparency
- Explainability for Every Prediction

---

## AI Assistant

Powered by **Google Gemini**.

Users can ask questions like:

- Why is this customer high risk?
- Which factors increased the prediction?
- What can be improved?
- Explain this prediction in simple terms.
- Suggest ways to reduce the risk.

The assistant combines:

- Prediction
- SHAP Explanation
- Customer Data

to generate intelligent responses.

---

## Backend

Built using **FastAPI**

Features include:

- Prediction Endpoint
- Chat Endpoint
- Request Validation
- Response Validation
- Modular Architecture

---

## Frontend

Built using **Next.js + TypeScript**

Features include:

- Customer Information Form
- Real-time Prediction
- Risk Badge
- Probability Display
- Explainable Prediction Summary
- AI Chat Interface
- Responsive UI

---

# Architecture

```text
                    +--------------------+
                    |     Next.js UI     |
                    +--------------------+
                               |
                               |
                      POST /predict
                               |
                               ▼
                     +----------------+
                     |    FastAPI     |
                     +----------------+
                               |
        +----------------------+----------------------+
        |                                             |
        ▼                                             ▼
+------------------+                    +----------------------+
| XGBoost Model    |                    | SHAP Explainer       |
+------------------+                    +----------------------+
        |                                             |
        +----------------------+----------------------+
                               |
                               ▼
                      Prediction Response
                               |
                               ▼
                      Displayed in Frontend
                               |
                      User asks a question
                               |
                               ▼
                         POST /chat
                               |
                               ▼
                     Gemini AI Assistant
                               |
                               ▼
                Natural Language Explanation
```

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod

---

## Backend

- Python
- FastAPI
- Uvicorn
- Pydantic

---

## Machine Learning

- XGBoost
- Scikit-Learn
- Pandas
- NumPy
- Joblib

---

## Explainability

- SHAP

---

## Artificial Intelligence

- Google Gemini API

---

# Machine Learning Pipeline

```text
Dataset
    │
    ▼
Data Cleaning
    │
    ▼
Feature Engineering
    │
    ▼
Train/Test Split
    │
    ▼
XGBoost Model Training
    │
    ▼
Model Evaluation
    │
    ▼
Save Model (.pkl)
    │
    ▼
Inference Pipeline
```

---

# Explainable AI

Every prediction generated by the model is passed through SHAP.

SHAP identifies:

- Which features contributed positively
- Which features contributed negatively
- Most influential factors
- Prediction confidence

Instead of returning only:

```text
Risk Probability = 82%
```

FinGuard AI also explains:

```text
High credit utilization increased risk.

Recent delayed payments contributed significantly.

Payment history had the largest impact.
```

This makes the model transparent and easier to trust.

---

# AI Assistant

The AI assistant receives:

```text
Customer Data

+

Prediction

+

SHAP Explanation

+

User Question
```

and generates contextual responses such as:

> "This customer is considered high risk primarily because of repeated delayed payments and high outstanding balances. Reducing credit utilization and maintaining timely payments could significantly lower the predicted risk."

---

# Project Structure

```text
FinGuard-AI/
│
├── backend/
│   ├── api/
│   ├── agent/
│   ├── explainability/
│   ├── predictor/
│   ├── model/
│   ├── schemas/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   ├── components/
│   │   ├── PredictionForm/
│   │   ├── ResultCard/
│   │   ├── RiskBadge/
│   │   └── ChatInterface/
│   ├── services/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# API Endpoints

## Predict Credit Risk

### Endpoint

```http
POST /predict
```

### Request

```json
{
  "customer": {
    "...": "customer features"
  }
}
```

### Response

```json
{
  "prediction": "High Risk",
  "probability": 0.83,
  "explanation": "Recent delayed payments contributed most to the prediction."
}
```

---

## Chat with AI Assistant

### Endpoint

```http
POST /chat
```

### Request

```json
{
  "message": "Why is this customer risky?",
  "customer": {}
}
```

### Response

```json
{
  "response": "The customer is high risk because..."
}
```

---

# Frontend Workflow

```text
User
 │
 ▼
Fill Customer Details
 │
 ▼
Submit Form
 │
 ▼
POST /predict
 │
 ▼
Receive Prediction
 │
 ▼
Display

• Risk Level
• Probability
• Explanation
 │
 ▼
Ask AI Assistant
 │
 ▼
POST /chat
 │
 ▼
Gemini Response
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/FinGuard-AI.git

cd FinGuard-AI
```

---

## Backend

Install dependencies

```bash
cd backend

pip install -r requirements.txt
```

Run the server

```bash
uvicorn main:app --reload
```

Backend runs on

```text
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```text
http://localhost:3000
```

---

# Current Progress

## Completed

- ✅ Data preprocessing
- ✅ Feature engineering
- ✅ XGBoost model training
- ✅ Model serialization using Joblib
- ✅ FastAPI backend
- ✅ Prediction endpoint
- ✅ SHAP explainability
- ✅ Google Gemini integration
- ✅ AI assistant endpoint
- ✅ Next.js frontend
- ✅ Customer input form
- ✅ Risk prediction card
- ✅ Risk badge
- ✅ Frontend-backend integration
- ✅ Human-readable prediction explanations

---

# Future Improvements

- User Authentication
- Prediction History
- Database Integration
- Dashboard Analytics
- SHAP Visualization Charts
- PDF Report Generation
- Docker Support
- CI/CD Pipeline
- Cloud Deployment (AWS/GCP/Azure)
- Model Monitoring
- Unit Testing
- Integration Testing
- Role-Based Access Control
- Loan Recommendation Engine
- Credit Improvement Suggestions
- Admin Dashboard

---

# Learning Outcomes

This project demonstrates practical experience in:

- Machine Learning
- Explainable AI (XAI)
- XGBoost
- SHAP
- FastAPI
- Next.js
- React
- TypeScript
- REST APIs
- AI Agent Development
- Google Gemini Integration
- Full-Stack Development
- Model Deployment
- Software Architecture
- API Design

---

# License

This project is developed for educational, research, and portfolio purposes.

---

# Project Status

**Current Version:** 🚧 MVP (Minimum Viable Product)

The complete end-to-end workflow is functional:

```text
Customer Input
      │
      ▼
Credit Risk Prediction
      │
      ▼
SHAP Explainability
      │
      ▼
AI-Powered Explanation
```

Future iterations will focus on production readiness, visualization, deployment, security, testing, and advanced analytics.
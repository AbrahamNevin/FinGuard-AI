"""
main.py

Entry point for the FinGuard FastAPI application.
"""

from fastapi import FastAPI
from src.api.routes import router

app = FastAPI(
    title="FinGuard AI",
    description="AI-powered Explainable Credit Risk Assessment API",
    version="1.0.0"
)
app.include_router(router)


@app.get("/")
def root():
    return {
        "message": "Welcome to FinGuard AI!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "application": "FinGuard AI",
        "version": "1.0.0"
    }
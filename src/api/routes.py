"""
routes.py

API endpoints for FinGuard AI.
"""

from fastapi import APIRouter
from src.api.schemas import PredictionRequest, ChatRequest
from src.services.prediction_service import predict_credit_risk
from src.services.shap_service import explain_prediction
from src.agent.agent import FinGuardAgent
from src.api.schemas import (
    PredictionRequest,
    ChatRequest,
    PredictionResponse,
    ChatResponse
)

router = APIRouter()
agent = FinGuardAgent()


# --------------------------------------------------
# Ping
# --------------------------------------------------

@router.get("/ping")
def ping():

    return {

        "message": "FinGuard API Working"

    }


# --------------------------------------------------
# Predict Credit Risk
# --------------------------------------------------

@router.post(
    "/predict",
    response_model=PredictionResponse
)
def predict(request: PredictionRequest):

    customer = request.customer.model_dump()

    result = predict_credit_risk(customer)

    return result

# --------------------------------------------------
# Explain Prediction
# --------------------------------------------------

@router.post("/explain")
def explain(request: PredictionRequest):

    customer = request.customer.model_dump()

    prediction = predict_credit_risk(customer)

    shap_result = explain_prediction(customer)

    return {

        "prediction": prediction,

        "explanation": shap_result

    }

# --------------------------------------------------
# Chat Endpoint
# --------------------------------------------------

@router.post("/chat")
def chat(request: ChatRequest):

    print(request)

    customer = None

    if request.customer is not None:
        customer = request.customer.model_dump()

    print(customer)

    response = agent.chat(
        request.message,
        customer
    )

    return response
"""
routes.py

API endpoints for FinGuard AI.
"""

from fastapi import APIRouter
from src.api.schemas import PredictionRequest
from src.services.prediction_service import predict_credit_risk

router = APIRouter()


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

@router.post("/predict")
def predict(request: PredictionRequest):

    customer = request.customer.model_dump()

    result = predict_credit_risk(customer)

    return result
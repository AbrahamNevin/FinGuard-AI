"""
routes.py

API endpoints for FinGuard AI.
"""

from fastapi import APIRouter
from src.api.schemas import PredictionRequest
from src.services.prediction_service import predict_credit_risk
from src.services.shap_service import explain_prediction

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
"""
tools.py

All tools available to FinGuard AI.
"""

from src.services.prediction_service import predict_credit_risk


def credit_risk_tool(user_input: dict):
    """
    Tool that predicts
    customer's credit risk.
    """

    result = predict_credit_risk(user_input)

    return result
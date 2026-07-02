"""
intent.py

Determines what the user wants.
"""

from enum import Enum


class Intent(Enum):

    GENERAL = "GENERAL"

    PREDICTION = "PREDICTION"

    EXPLANATION = "EXPLANATION"


def detect_intent(user_message: str) -> Intent:
    """
    Detect the user's intent.

    Returns:
        Intent.GENERAL
        Intent.PREDICTION
        Intent.EXPLANATION
    """

    message = user_message.lower()

    prediction_keywords = [

        "predict",
        "prediction",
        "default",
        "credit risk",
        "risk",
        "classify",
        "probability"

    ]

    explanation_keywords = [

        "explain",
        "why",
        "reason",
        "interpret",
        "shap"

    ]

    # -------------------------

    if any(
        word in message
        for word in explanation_keywords
    ):
        return Intent.EXPLANATION

    # -------------------------

    if any(
        word in message
        for word in prediction_keywords
    ):
        return Intent.PREDICTION

    # -------------------------

    return Intent.GENERAL
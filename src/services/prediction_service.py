"""
prediction_service.py

Prediction Service for FinGuard AI.
"""

from pathlib import Path

import joblib

from src.preprocessing.preprocess import preprocess_input


# ------------------------------------------
# Paths
# ------------------------------------------

ROOT_DIR = Path(__file__).resolve().parents[2]

MODELS_DIR = ROOT_DIR / "models"


# ------------------------------------------
# Load Model
# ------------------------------------------

model = joblib.load(
    MODELS_DIR / "logistic_regression.pkl"
)


# ------------------------------------------
# Prediction Function
# ------------------------------------------

def predict_credit_risk(user_input: dict):

    try:

        processed = preprocess_input(user_input)

        prediction = model.predict(processed)[0]

        probabilities = model.predict_proba(processed)[0]

        return {

            "success": True,

            "prediction": int(prediction),

            "probability_default": float(probabilities[1]),

            "probability_non_default": float(probabilities[0])

        }

    except Exception as e:

        return {

            "success": False,

            "error": str(e)

        }
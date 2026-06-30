"""
preprocess.py

Handles preprocessing before prediction.
"""

from pathlib import Path

import joblib
import pandas as pd


# ------------------------------------------
# Paths
# ------------------------------------------

ROOT_DIR = Path(__file__).resolve().parents[2]

MODELS_DIR = ROOT_DIR / "models"


# ------------------------------------------
# Load Artifacts
# ------------------------------------------

scaler = joblib.load(MODELS_DIR / "scaler.pkl")

feature_columns = joblib.load(
    MODELS_DIR / "feature_columns.pkl"
)


# ------------------------------------------
# Preprocess
# ------------------------------------------

def preprocess_input(user_input: dict):

    """
    Convert user dictionary into the exact format
    expected by the ML model.
    """

    df = pd.DataFrame([user_input])

    # Ensure correct column order
    df = df[feature_columns]

    # Scale
    scaled = scaler.transform(df)

    # Convert back to DataFrame
    scaled_df = pd.DataFrame(
        scaled,
        columns=feature_columns
    )

    return scaled_df
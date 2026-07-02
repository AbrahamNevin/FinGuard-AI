"""
shap_service.py

Provides SHAP explanations for FinGuard predictions.
"""

import joblib
import pandas as pd
import shap


# -----------------------------------------
# Load Artifacts
# -----------------------------------------

model = joblib.load("models/logistic_regression.pkl")

scaler = joblib.load("models/scaler.pkl")

feature_columns = joblib.load(
    "models/feature_columns.pkl"
)


# -----------------------------------------
# Build SHAP Explainer
# -----------------------------------------

# -----------------------------------------
# Load Background Dataset
# -----------------------------------------

background = pd.read_csv(
    "data/processed/X_train.csv"
)

# -----------------------------------------
# Build SHAP Explainer
# -----------------------------------------

explainer = shap.LinearExplainer(
    model,
    background
)


# -----------------------------------------
# Explain Prediction
# -----------------------------------------

def explain_prediction(customer_data: dict):

    """
    Generate SHAP values for one customer.
    """

    # -------------------------------------

    df = pd.DataFrame(
        [customer_data]
    )

    # -------------------------------------

    df = df[feature_columns]

    # -------------------------------------

    scaled = scaler.transform(df)

    scaled = pd.DataFrame(
        scaled,
        columns=feature_columns
    )

    # -------------------------------------

    shap_values = explainer(scaled)

    # -------------------------------------

    explanation = []

    for feature, value in zip(
        feature_columns,
        shap_values.values[0]
    ):

        explanation.append({

            "feature": feature,

            "impact": float(value)

        })

    # -------------------------------------
    # Sort by absolute importance
    # -------------------------------------

    explanation.sort(
        key=lambda x: abs(x["impact"]),
        reverse=True
    )

    # -------------------------------------
    # Separate Positive / Negative
    # -------------------------------------

    positive_features = [

        item

        for item in explanation

        if item["impact"] > 0

    ]

    negative_features = [

        item

        for item in explanation

        if item["impact"] < 0

    ]

    # -------------------------------------
    # Return Top Features
    # -------------------------------------

    return {

        "top_positive": positive_features[:5],

        "top_negative": negative_features[:5]

    }

"""
shap_tool.py

Tool for generating SHAP explanations.
"""

from src.services.shap_service import explain_prediction


def shap_tool(customer_data: dict) -> dict:
    """
    Generate SHAP explanation for a customer.

    Parameters
    ----------
    customer_data : dict
        Customer features.

    Returns
    -------
    dict
        Top positive and negative SHAP features.
    """

    return explain_prediction(customer_data)
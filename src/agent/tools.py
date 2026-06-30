"""
tools.py

Tools available to the FinGuard AI Agent.
"""

from src.services.prediction_service import predict_credit_risk


def credit_risk_tool(
    LIMIT_BAL: int,
    SEX: int,
    EDUCATION: int,
    MARRIAGE: int,
    AGE: int,
    PAY_0: int,
    PAY_2: int,
    PAY_3: int,
    PAY_4: int,
    PAY_5: int,
    PAY_6: int,
    BILL_AMT1: int,
    BILL_AMT2: int,
    BILL_AMT3: int,
    BILL_AMT4: int,
    BILL_AMT5: int,
    BILL_AMT6: int,
    PAY_AMT1: int,
    PAY_AMT2: int,
    PAY_AMT3: int,
    PAY_AMT4: int,
    PAY_AMT5: int,
    PAY_AMT6: int,
) -> dict:
    """
    Predict the credit default risk for a customer.

    Args:
        LIMIT_BAL: Amount of credit limit.
        SEX: Gender (1=Male, 2=Female).
        EDUCATION: Education category.
        MARRIAGE: Marital status.
        AGE: Customer age.
        PAY_0 to PAY_6: Recent repayment history.
        BILL_AMT1 to BILL_AMT6: Previous bill statements.
        PAY_AMT1 to PAY_AMT6: Previous payment amounts.

    Returns:
        A dictionary containing:
        - success
        - prediction
        - probability_default
        - probability_non_default
    """

    customer = {
        "LIMIT_BAL": LIMIT_BAL,
        "SEX": SEX,
        "EDUCATION": EDUCATION,
        "MARRIAGE": MARRIAGE,
        "AGE": AGE,
        "PAY_0": PAY_0,
        "PAY_2": PAY_2,
        "PAY_3": PAY_3,
        "PAY_4": PAY_4,
        "PAY_5": PAY_5,
        "PAY_6": PAY_6,
        "BILL_AMT1": BILL_AMT1,
        "BILL_AMT2": BILL_AMT2,
        "BILL_AMT3": BILL_AMT3,
        "BILL_AMT4": BILL_AMT4,
        "BILL_AMT5": BILL_AMT5,
        "BILL_AMT6": BILL_AMT6,
        "PAY_AMT1": PAY_AMT1,
        "PAY_AMT2": PAY_AMT2,
        "PAY_AMT3": PAY_AMT3,
        "PAY_AMT4": PAY_AMT4,
        "PAY_AMT5": PAY_AMT5,
        "PAY_AMT6": PAY_AMT6,
    }

    return predict_credit_risk(customer)
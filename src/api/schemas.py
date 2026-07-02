"""
schemas.py

Pydantic request and response models.
"""

from pydantic import BaseModel


class CustomerData(BaseModel):

    LIMIT_BAL: float

    SEX: int

    EDUCATION: int

    MARRIAGE: int

    AGE: int

    PAY_0: int

    PAY_2: int

    PAY_3: int

    PAY_4: int

    PAY_5: int

    PAY_6: int

    BILL_AMT1: float

    BILL_AMT2: float

    BILL_AMT3: float

    BILL_AMT4: float

    BILL_AMT5: float

    BILL_AMT6: float

    PAY_AMT1: float

    PAY_AMT2: float

    PAY_AMT3: float

    PAY_AMT4: float

    PAY_AMT5: float

    PAY_AMT6: float


class PredictionRequest(BaseModel):

    customer: CustomerData


class ChatRequest(BaseModel):

    message: str

    customer: CustomerData | None = None

# ---------------------------------------------
# Response Models
# ---------------------------------------------

class PredictionResponse(BaseModel):

    success: bool

    prediction: int

    probability_default: float

    probability_non_default: float


class ChatResponse(BaseModel):

    response: str
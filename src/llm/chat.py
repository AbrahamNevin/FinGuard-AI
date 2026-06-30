"""
chat.py

Handles communication with Gemini.
"""

from src.llm.client import client
from src.llm.prompts import SYSTEM_PROMPT
from src.llm.config import MODEL_NAME


def chat(user_message: str, prediction_data: dict | None = None):
    """
    Send a message to Gemini.

    Parameters
    ----------
    user_message : str
        The user's question.

    prediction_data : dict | None
        Prediction output from the ML model.
    """

    prompt = SYSTEM_PROMPT

    if prediction_data:

        prompt += f"""

Prediction Result

Prediction:
{prediction_data["prediction"]}

Probability of Default:
{prediction_data["probability_default"]:.2%}

Probability of Non Default:
{prediction_data["probability_non_default"]:.2%}

Use the above prediction when answering.
"""

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=f"{prompt}\n\nUser: {user_message}"
    )

    return response.text
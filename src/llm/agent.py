"""
agent.py

Main orchestration layer for FinGuard AI.
"""

from src.llm.chat import chat
from src.llm.tools import credit_risk_tool


class FinGuardAgent:
    """
    Main AI Agent class.
    """

    def __init__(self):
        print("✅ FinGuard Agent Initialized")

    def predict(self, customer_data: dict):
        """
        Runs the ML prediction tool.
        """

        return credit_risk_tool(**customer_data)

    def explain(self, customer_data: dict):
        """
        Gets prediction and asks Gemini
        to explain it.
        """

        prediction = self.predict(customer_data)

        prompt = """
Explain the following credit risk prediction.

Prediction Result:

{}

Explain:
1. What the prediction means.
2. What the probability means.
3. Keep the explanation simple.
4. Do NOT invent information.
""".format(prediction)

        response = chat(prompt)

        return response

    def run(self, customer_data: dict):

        return self.explain(customer_data)
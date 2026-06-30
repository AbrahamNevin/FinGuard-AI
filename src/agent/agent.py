"""
agent.py

Main AI Agent for FinGuard AI.
"""

from src.agent.registry import get_tool
from src.agent.llm_adapter import LLMAdapter


class FinGuardAgent:
    """
    Main orchestrator for FinGuard AI.
    """

    def __init__(self):

        self.llm = LLMAdapter()

        print("✅ FinGuard Agent Initialized")

    # ------------------------------------

    def execute_tool(
        self,
        tool_name: str,
        **kwargs
    ):

        tool = get_tool(tool_name)

        if tool is None:

            raise ValueError(
                f"Unknown Tool: {tool_name}"
            )

        return tool(**kwargs)

    # ------------------------------------

    def explain_prediction(
        self,
        prediction_result: dict
    ):

        prompt = f"""
You are FinGuard AI.

Explain this prediction in simple language.

Prediction Result

{prediction_result}

Keep the explanation professional.

Avoid financial advice.
"""

        return self.llm.generate(prompt)

    # ------------------------------------

    def predict_customer(
        self,
        customer_data: dict
    ):

        prediction = self.execute_tool(

            "credit_risk",

            **customer_data

        )

        explanation = self.explain_prediction(
            prediction
        )

        return {

            "prediction": prediction,

            "explanation": explanation

        }
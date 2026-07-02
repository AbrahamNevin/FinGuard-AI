"""
agent.py

Main AI Agent for FinGuard AI.
"""

from src.agent.intent import detect_intent, Intent
from src.agent.registry import get_tool
from src.agent.llm_adapter import LLMAdapter


class FinGuardAgent:

    def __init__(self):

        self.llm = LLMAdapter()

        print("✅ FinGuard Agent Initialized")

    # --------------------------------------------------

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

    # --------------------------------------------------

    def explain_prediction(
        self,
        prediction_result: dict
    ):

        prompt = f"""
You are FinGuard AI.

Explain this prediction in simple language.

Prediction Result:

{prediction_result}

Explain what the prediction means.

Do NOT give financial advice.
"""

        return self.llm.generate(prompt)

    # --------------------------------------------------

    def chat(self, user_message: str, customer_data: dict | None = None):

        intent = detect_intent(user_message)

        print(f"Detected Intent: {intent}")

        # ----------------------------------------------

        if intent == Intent.GENERAL:

            return self.llm.generate(user_message)

        # ----------------------------------------------

        elif intent == Intent.PREDICTION:

            if customer_data is None:

                return (
                    "Please provide customer data "
                    "for prediction."
                )

            prediction = self.execute_tool(

                "credit_risk",

                **customer_data

            )

            explanation = self.explain_prediction(
                prediction
            )

            return explanation

        # ----------------------------------------------

        elif intent == Intent.EXPLANATION:

            return (
                "SHAP explanation tool "
                "will be implemented in Phase 4."
            )

        # ----------------------------------------------

        return "Unable to determine intent."
"""
agent.py

Main AI Agent for FinGuard AI.
"""

from src.agent.intent import detect_intent, Intent
from src.agent.registry import get_tool
from src.agent.llm_adapter import LLMAdapter
from src.services.report_service import build_credit_report

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
    prediction_result: dict,
    shap_result: dict
):

    report = build_credit_report(
        prediction_result,
        shap_result
    )

    prompt = f"""
You are FinGuard AI.

Below is a structured machine learning report.

{report}

Your task is to:

1. Explain the prediction in simple English.
2. Mention the probability.
3. Explain why the positive features increased the risk.
4. Explain why the negative features reduced the risk.
5. Never invent new reasons.
6. Do not provide financial advice.
7. End with this disclaimer:

"This explanation is generated from a machine learning model and should support—not replace—human decision making."
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

            shap_result = self.execute_tool(
                "shap",
                customer_data=customer_data
            )

            report = self.explain_prediction(
                prediction,
                shap_result
            )

            return report

        # ----------------------------------------------

        elif intent == Intent.EXPLANATION:

            return (
                "SHAP explanation tool "
                "will be implemented in Phase 4."
            )

        # ----------------------------------------------

        return "Unable to determine intent."
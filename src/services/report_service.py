"""
report_service.py

Formats prediction and SHAP results into a
structured report for the LLM.
"""


def build_credit_report(
    prediction_result: dict,
    shap_result: dict
) -> str:
    """
    Build a structured report for the LLM.
    """

    prediction = (
        "Default"
        if prediction_result["prediction"] == 1
        else "Non-Default"
    )

    probability = (
        prediction_result["probability_default"] * 100
    )

    report = []

    report.append("=" * 60)
    report.append("CREDIT RISK ASSESSMENT REPORT")
    report.append("=" * 60)

    report.append("")
    report.append("Prediction")
    report.append(f"  {prediction}")

    report.append("")
    report.append("Probability of Default")
    report.append(f"  {probability:.2f}%")

    report.append("")
    report.append("-" * 60)

    report.append("")
    report.append("Top Factors Increasing Risk")

    for item in shap_result["top_positive"]:

        report.append(
            f"• {item['display_name']}"
        )

        report.append(
            f"  {item['description']}"
        )

        report.append(
            f"  Impact: +{item['impact']:.3f}"
        )

        report.append("")

    report.append("-" * 60)

    report.append("")
    report.append("Top Factors Reducing Risk")

    for item in shap_result["top_negative"]:

        report.append(
            f"• {item['display_name']}"
        )

        report.append(
            f"  {item['description']}"
        )

        report.append(
            f"  Impact: {item['impact']:.3f}"
        )

        report.append("")

    report.append("=" * 60)

    return "\n".join(report)
"""
registry.py

Central registry for all tools
available to FinGuard AI.
"""

from src.agent.tools import credit_risk_tool
from src.agent.shap_tool import shap_tool

TOOL_REGISTRY = {

    "credit_risk": credit_risk_tool,

    "shap": shap_tool,

}


# -----------------------------------------
# Helper Functions
# -----------------------------------------

def get_tool(tool_name: str):
    """
    Returns the tool function.

    Example

    get_tool("credit_risk")
    """

    return TOOL_REGISTRY.get(tool_name)


def list_tools():
    """
    Returns every available tool.
    """

    return list(TOOL_REGISTRY.keys())
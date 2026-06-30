"""
agent.py

Main AI Agent for FinGuard.
"""

from src.llm.chat import chat
from src.agent.registry import get_tool, list_tools


class FinGuardAgent:
    """
    Main AI Agent class.
    """

    def __init__(self):
        self.available_tools = list_tools()
        print("✅ FinGuard Agent Ready")

    def available(self):
        """
        Return the list of available tools.
        """
        return self.available_tools

    def execute_tool(self, tool_name: str, **kwargs):
        """
        Execute a tool by name.
        """
        tool = get_tool(tool_name)

        if tool is None:
            raise ValueError(f"Unknown tool: {tool_name}")

        return tool(**kwargs)

    def ask_llm(self, message: str, context: str = ""):
        """
        Send a message to the LLM.
        """

        prompt = f"""
{context}

User:
{message}
"""

        return chat(prompt)
"""
llm_adapter.py

LLM Adapter for FinGuard AI.

This module isolates all communication with the LLM.
If we ever change from Gemini to another model,
only this file needs to change.
"""

from src.llm.chat import chat


class LLMAdapter:
    """
    Wrapper around the current LLM implementation.
    """

    def __init__(self):
        self.provider = "Gemini"

    def generate(self, prompt: str) -> str:
        """
        Send a prompt to the configured LLM and
        return the generated response.
        """
        return chat(prompt)

    def get_provider(self) -> str:
        """
        Return the current LLM provider.
        """
        return self.provider
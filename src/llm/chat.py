# src/llm/chat.py

from openai import OpenAI

from src.llm.client import client
from src.llm.prompts import SYSTEM_PROMPT


def chat(user_message: str):

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
    )

    return response.choices[0].message.content
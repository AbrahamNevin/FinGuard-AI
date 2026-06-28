# src/llm/chat.py

from openai import OpenAI

from src.llm.client import client
from src.llm.prompts import SYSTEM_PROMPT

from src.llm.config import MODEL_NAME, TEMPERATURE, MAX_TOKENS

def chat(user_message: str):

    response = client.chat.completions.create(
        model=MODEL_NAME,
        temperature=TEMPERATURE,
        max_tokens=MAX_TOKENS,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message},
        ],
    )

    return response.choices[0].message.contents
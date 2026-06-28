from src.llm.client import client
from src.llm.prompts import SYSTEM_PROMPT

def chat(user_message: str):

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"{SYSTEM_PROMPT}\n\nUser: {user_message}"
    )

    return response.text
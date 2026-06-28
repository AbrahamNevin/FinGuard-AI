# src/llm/client.py

import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables from .env
load_dotenv()

# Read the API key
api_key = os.getenv("OPENAI_API_KEY")

# Check if the key exists
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in .env file")

# Create the OpenAI client
client = OpenAI(api_key=api_key)
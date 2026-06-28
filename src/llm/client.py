import os
from dotenv import load_dotenv
from openai import OpenAI

print("Step 1: Loading .env")

load_dotenv()

print("Step 2: Reading API Key")

api_key = os.getenv("OPENAI_API_KEY")

print("API Key Found:", api_key is not None)

if api_key:
    print("First 10 characters:", api_key[:10])

if not api_key:
    raise ValueError("OPENAI_API_KEY not found")

print("Step 3: Creating OpenAI Client")

client = OpenAI(api_key=api_key)

print("Step 4: Client Created Successfully")
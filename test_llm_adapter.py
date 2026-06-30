from src.agent.llm_adapter import LLMAdapter

adapter = LLMAdapter()

print("Provider:", adapter.get_provider())

response = adapter.generate(
    "In one sentence, explain what credit risk means."
)

print("\nResponse:\n")
print(response)
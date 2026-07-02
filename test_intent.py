from src.agent.intent import detect_intent


messages = [

    "Predict this customer's risk",

    "Explain why this customer defaulted",

    "What is credit risk?",

    "Hello",

    "Can you calculate the default probability?"

]


for message in messages:

    intent = detect_intent(message)

    print("--------------------------------")

    print("Message :", message)

    print("Intent  :", intent)
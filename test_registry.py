from src.agent.registry import list_tools

print("Registered Tools")

print("----------------")

for tool in list_tools():

    print(tool)
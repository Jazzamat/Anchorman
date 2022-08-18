import os

import openai

openai.api_key = ""
key = os.getenv("OPENAI_API_KEY")
print(key)
about = "a bank robery"

# openai.Completion

# response = openai.Completion.create(
#     model="text-davinci-002",
#     prompt="Write today's funny top news story about" + about,
   
#     max_tokens=500,
#     temperature=1,
# )

# print(response)
        

  

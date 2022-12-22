import json
import urllib.request

print("Kacheese by wuku#4042")

def get_answers(id):
  url = f"https://play.kahoot.it/rest/kahoots/{id}"
  color_list = ["red", "blue", "yellow", "green"]
  with urllib.request.urlopen(url) as response:
      data = response.read()
  questions = json.loads(data)["questions"]

  for index, slide in enumerate(questions):
      for i, choice in enumerate(slide.get("choices")):
          if choice["correct"]:
              print(f"{index+1}: {choice.get('answer')} {color_list[i]}")

while True:
    get_answers(input("Enter uuid: "))

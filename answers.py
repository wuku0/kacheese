import json
import urllib.request

print("Kacheese by wuku#4042")

def get_answers(id):
  url = f"https://play.kahoot.it/rest/kahoots/{id}"
  color_list = ["red", "blue", "yellow", "green"]
  try:
    with urllib.request.urlopen(url) as response:
      data = response.read()
    questions = json.loads(data)["questions"]

    for index, slide in enumerate(questions):
      for i, choice in enumerate(slide.get("choices", [])):
        if choice.get("correct", False):
          print(f"{index+1}: {choice.get('answer')}")
          print(f"{color_list[i]}")
          print()
  except urllib.error.HTTPError:
    print("Error: Invalid or non-existent Kahoot ID. Please enter a valid ID.")

while True:
  get_answers(input("Enter uuid: "))

import requests
from prettytable import PrettyTable

base_url = "https://kahoot.it/rest/challenges/"
uuid = input("Enter the UUID: ")
url = f"{base_url}{uuid}"

response = requests.get(url)
if response.status_code == 200:
    kahoot_data = response.json()
    questions = kahoot_data.get("questions", [])
    table = PrettyTable()
    table.field_names = ["Question Number", "Question", "Correct Answer(s)"]
    if questions:
        for idx, question in enumerate(questions, start=1):
            question_number = idx
            question_text = question["question"]
            correct_answers = [
                choice["answer"]
                for choice in question["choices"]
                if choice["correct"]
            ]
            table.add_row([question_number, question_text, ", ".join(correct_answers) if correct_answers else "None"])
        table.align = "l"
        print(table)
    else:
        print("No questions found for this Kahoot.")
else:
    print(f"Failed to retrieve Kahoot data. Status code: {response.status_code}")

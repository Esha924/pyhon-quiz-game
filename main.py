import pandas as pd
import os

def load_questions(file_path):
    return pd.read_csv(file_path)

def play_quiz(questions_df):
    score = 0
    print("\nWelcome to the Python Quiz Game!\n")
    user_name = input("Enter your name: ")

    for index, row in questions_df.iterrows():
        print(f"\nQ{index+1}. {row['Question']}")
        print(f"A. {row['OptionA']}   B. {row['OptionB']}   C. {row['OptionC']}   D. {row['OptionD']}")
        
        answer = input("Your Answer (A/B/C/D): ").upper()

        if answer == row['Answer']:
            print("✔ Correct!")
            score += 1
        else:
            print(f"✖ Wrong! Correct answer: {row['Answer']}")

    print("\n-----------------------------------")
    print(f"{user_name}, your final score: {score} / {len(questions_df)}")
    print("-----------------------------------\n")

    return user_name, score

def update_leaderboard(user_name, score, file_name="leaderboard.csv"):
    if os.path.exists(file_name):
        leaderboard = pd.read_csv(file_name)
    else:
        leaderboard = pd.DataFrame(columns=["Name", "Score"])

    leaderboard.loc[len(leaderboard)] = [user_name, score]
    leaderboard.to_csv(file_name, index=False)

    print("\n📊 Leaderboard Updated!")
    print(leaderboard.sort_values(by="Score", ascending=False).head())

questions_file = "questions.csv"
questions_df = load_questions(questions_file)
user, user_score = play_quiz(questions_df)
update_leaderboard(user, user_score)

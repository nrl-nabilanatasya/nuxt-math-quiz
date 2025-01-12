import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    name: sessionStorage.getItem("quizName") || "",
    questions: [
      {
        id: "1",
        question: "17 rounded off to the nearest 10 is..",
        options: ["A. 10", "B. 20", "C. 17"],
        correctAnswer: "B",
      },
      {
        id: "2",
        question: "45 rounded off to the nearest 10 is..",
        options: ["A. 50", "B. 45", "C. 40"],
        correctAnswer: "A",
      },
      {
        id: "3",
        question: "75 rounded off to the nearest 10 is..",
        options: ["A. 70", "B. 80", "C. 175"],
        correctAnswer: "B",
      },
      {
        id: "4",
        question: "19 rounded off to the nearest 10 is..",
        options: ["A. 20", "B. 10", "C. 19"],
        correctAnswer: "A",
      },
      {
        id: "5",
        question: "64 rounded off to the nearest 10 is..",
        options: ["A. 64", "B. 70", "C. 60"],
        correctAnswer: "C",
      },
      {
        id: "6",
        question: "0 rounded off to the nearest 10 is..",
        options: ["A. 10", "B. 1", "C. 0"],
        correctAnswer: "C",
      },
      {
        id: "7",
        question: "98 rounded off to the nearest 10 is..",
        options: ["A. 80", "B. 100", "C. 89"],
        correctAnswer: "B",
      },
      {
        id: "8",
        question: "199 rounded off to the nearest 10 is..",
        options: ["A. 190", "B. 100", "C. 200"],
        correctAnswer: "C",
      },
      {
        id: "9",
        question: "94 rounded off to the nearest 10 is..",
        options: ["A. 100", "B. 94", "C. 90"],
        correctAnswer: "C",
      },
      {
        id: "10",
        question: "165 rounded off to the nearest 10 is..",
        options: ["A. 160", "B. 170", "C. 150"],
        correctAnswer: "B",
      },
      {
        id: "11",
        question: "445 rounded off to the nearest 10 is..",
        options: ["A. 450", "B. 440", "C. 500"],
        correctAnswer: "A",
      },
      {
        id: "12",
        question: "999 rounded off to the nearest 10 is..",
        options: ["A. 990", "B. 1000", "C. 909"],
        correctAnswer: "B",
      },
    ],
    selectedAnswers: JSON.parse(
      sessionStorage.getItem("selectedAnswers") || "{}"
    ),
    leaderboard: JSON.parse(localStorage.getItem("leaderboard") || "[]"),
  }),
  actions: {
    setName(name: string) {
      this.name = name;
      sessionStorage.setItem("quizName", name);
    },
    selectAnswer(questionId: any, answer: any) {
      this.selectedAnswers[questionId] = answer;
      sessionStorage.setItem(
        "selectedAnswers",
        JSON.stringify(this.selectedAnswers)
      );
    },
    calculateScore() {
      return this.questions.reduce((score, question) => {
        const selectedAnswer = this.selectedAnswers[question.id];
        if (
          selectedAnswer &&
          selectedAnswer.charAt(0) === question.correctAnswer
        ) {
          score++;
        }
        return score;
      }, 0);
    },
    saveScore(score: number) {
      const timestamp = new Date().toLocaleString();
      const entry = { name: this.name, score, timestamp };
      this.leaderboard.push(entry);
      localStorage.setItem("leaderboard", JSON.stringify(this.leaderboard));
    },
    resetQuiz() {
      // this.name = ''
      this.selectedAnswers = {};
      //   sessionStorage.removeItem("quizName");
      sessionStorage.removeItem("selectedAnswers");
    },
  },
});

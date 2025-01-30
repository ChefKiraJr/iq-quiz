import { IQuizQuestion } from "../types";

const iqQuestions: IQuizQuestion[] = [
  {
    id: 1,
    question: "Complete the sequence: 2, 4, 8, 16, ...",
    options: ["24", "32", "30", "28"],
    correctAnswer: "32",
    explanation:
      "Each number is multiplied by 2 to get the next number in the sequence.",
  },
  {
    id: 2,
    question:
      "Which number does not belong in the series: 3, 7, 11, 15, 18, 19, 23",
    options: ["18", "19", "23", "15"],
    correctAnswer: "19",
    explanation:
      "All numbers except 19 follow the pattern of adding 4 to get the next number.",
  },
  {
    id: 3,
    question: "If all Blicks are Blocks and some Blocks are Bricks, then:",
    options: [
      "All Blicks are definitely Bricks",
      "Some Blicks might be Bricks",
      "No Blicks are Bricks",
      "All Bricks are Blocks",
    ],
    correctAnswer: "Some Blicks might be Bricks",
    explanation:
      "Since all Blicks are Blocks and some Blocks are Bricks, it's possible that some Blicks are Bricks.",
  },
  {
    id: 4,
    question: "What number should come next: 1, 4, 9, 16, 25, ...",
    options: ["30", "36", "49", "35"],
    correctAnswer: "36",
    explanation:
      "These are perfect squares: 1², 2², 3², 4², 5², so the next number is 6² = 36.",
  },
  {
    id: 5,
    question: "If FISH is coded as EHRG, then BIRD is coded as:",
    options: ["AHQC", "CJSE", "AJQC", "CHQC"],
    correctAnswer: "AHQC",
    explanation:
      "Each letter is shifted one position backwards in the alphabet.",
  },
  {
    id: 6,
    question: "Which figure completes the pattern?\n⬡ ⬢ ⬡ ⬢ ⬡ ?",
    options: ["⬡", "⬢", "⬨", "⬣"],
    correctAnswer: "⬢",
    explanation: "The pattern alternates between hexagon and filled hexagon.",
  },
  {
    id: 7,
    question: "If RED = 27 and BLUE = 37, then GREEN = ?",
    options: ["57", "47", "67", "77"],
    correctAnswer: "57",
    explanation:
      "Each letter's position in alphabet is added: GREEN = 7+18+5+5+14 = 57",
  },
  {
    id: 8,
    question:
      "Which word does not belong: Apple, Banana, Carrot, Date, Eggplant",
    options: ["Apple", "Carrot", "Date", "Eggplant"],
    correctAnswer: "Carrot",
    explanation: "All others are fruits, while Carrot is a vegetable.",
  },
  {
    id: 9,
    question: "Complete the analogy: Book is to Pages as Tree is to:",
    options: ["Branches", "Leaves", "Trunk", "Roots"],
    correctAnswer: "Leaves",
    explanation:
      "Pages make up a book as leaves make up a tree (in terms of quantity and visibility).",
  },
  {
    id: 10,
    question:
      "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: ["100 minutes", "5 minutes", "20 minutes", "25 minutes"],
    correctAnswer: "5 minutes",
    explanation:
      "The ratio of machines to widgets stays the same, so the time remains constant at 5 minutes.",
  },
];

export default iqQuestions;

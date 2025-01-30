import create from "zustand";
import iqQuestions from "../const/iqQuestions";
import { TestState, UserBiodata } from "../types";

interface TestStore extends TestState {
  setCurrentQuestionIndex: (index: number) => void;
  setUserAnswer: (questionIndex: number, answer: string) => void;
  calculateScore: () => void;
  resetTest: () => void;
  setBiodata: (biodata: UserBiodata) => void;
}

export const useTestStore = create<TestStore>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: Array(iqQuestions.length).fill(null),
  score: 0,
  questions: iqQuestions,
  biodata: null,

  setBiodata: (biodata) => set({ biodata }),

  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  setUserAnswer: (questionIndex, answer) =>
    set((state) => {
      const newUserAnswers = [...state.userAnswers];
      newUserAnswers[questionIndex] = answer;
      return { userAnswers: newUserAnswers };
    }),

  calculateScore: () =>
    set((state) => {
      const newScore = state.userAnswers.reduce((acc, answer, index) => {
        return answer === state.questions[index].correctAnswer ? acc + 1 : acc;
      }, 0);
      return { score: newScore };
    }),

  resetTest: () =>
    set({
      currentQuestionIndex: 0,
      userAnswers: Array(iqQuestions.length).fill(null),
      score: 0,
    }),
}));

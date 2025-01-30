export interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface TestState {
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  score: number;
  questions: IQuizQuestion[];
  biodata: UserBiodata | null;
}

export interface QuestionCardProps {
  question: string;
  answers: string[];
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  onSubmit: () => void;
}

export interface IQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface UserBiodata {
  name: string;
  age: number;
  education: string;
}

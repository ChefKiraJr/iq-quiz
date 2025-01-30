import type React from "react";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import iqQuestions from "../../const/iqQuestions";
import QuestionCard from "../../components/QuestionCard";
import { useTestStore } from "../../store/testStore";

const QuestionsPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    currentQuestionIndex,
    userAnswers,
    questions,
    setCurrentQuestionIndex,
    setUserAnswer,
    calculateScore,
  } = useTestStore();

  const currentQuestion = iqQuestions[currentQuestionIndex];

  const handleSelectAnswer = (answer: string) => {
    setUserAnswer(currentQuestionIndex, answer);
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Test finished
      calculateScore();
      navigate("/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      bgGradient="linear(to-r, purple.500, pink.500)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin={0}
      padding={0}
    >
      <VStack spacing={8}>
        <Heading
          as="h1"
          size="2xl"
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.4)"
        >
          IQ Test
        </Heading>
        <Text color="white" fontSize="lg">
          Question {currentQuestionIndex + 1} of {iqQuestions.length}
        </Text>
        {/* <QuestionCard
          question={currentQuestion.question}
          answers={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          onSubmit={handleSubmit}
        /> */}
        <QuestionCard
          question={currentQuestion.question}
          answers={currentQuestion.options}
          selectedAnswer={userAnswers[currentQuestionIndex]}
          onSelectAnswer={handleSelectAnswer}
          onSubmit={handleSubmit}
        />
        <HStack spacing={4}>
          <Button
            size="sm"
            colorScheme="whiteAlpha"
            onClick={handlePrevious}
            isDisabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button
            size="sm"
            colorScheme="whiteAlpha"
            onClick={handleNext}
            isDisabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </Button>
        </HStack>
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => navigate("/")}
          _hover={{ bg: "red.600" }}
          _active={{ bg: "red.700" }}
          shadow="md"
        >
          Quit Test
        </Button>
      </VStack>
    </Box>
  );
};

export default QuestionsPage;

import type React from "react";
import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTestStore } from "../../store/testStore";

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const { score, questions, biodata, resetTest } = useTestStore();

  const handleBackToHome = () => {
    resetTest();
    navigate("/");
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      bgGradient="linear(to-r, green.500, teal.500)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin={0}
      padding={0}
    >
      <VStack spacing={8} width="100%" maxWidth="600px" p={4}>
        <Heading
          as="h1"
          size="xl"
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.4)"
        >
          Test Results
        </Heading>
        {biodata && (
          <VStack align="start" spacing={2}>
            <Text color="white" fontSize="lg">
              Name: {biodata.name}
            </Text>
            <Text color="white" fontSize="lg">
              Age: {biodata.age}
            </Text>
            <Text color="white" fontSize="lg">
              Education: {biodata.education}
            </Text>
          </VStack>
        )}
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Your Score: {score} / {questions.length}
        </Text>
        <Text color="white" fontSize="lg">
          {score === questions.length
            ? "Perfect score! You're a genius!"
            : score >= questions.length * 0.8
            ? "Great job! You have a high IQ!"
            : score >= questions.length * 0.6
            ? "Good effort! Your IQ is above average."
            : "Keep practicing to improve your score!"}
        </Text>
        <Button
          size="lg"
          colorScheme="whiteAlpha"
          onClick={handleBackToHome}
          _hover={{ bg: "whiteAlpha.300" }}
          _active={{ bg: "whiteAlpha.400" }}
          shadow="md"
        >
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ResultsPage;

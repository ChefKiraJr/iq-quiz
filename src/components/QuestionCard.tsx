import type React from "react";
import { Box, VStack, Text, Button, RadioGroup, Radio } from "@chakra-ui/react";
import { QuestionCardProps } from "../types";

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  selectedAnswer,
  onSelectAnswer,
  onSubmit,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      width="100%"
      maxWidth="500px"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          {question}
        </Text>
        <RadioGroup onChange={onSelectAnswer} value={selectedAnswer || ""}>
          <VStack align="stretch" spacing={3}>
            {answers.map((answer, index) => (
              <Radio key={index} value={answer}>
                {answer}
              </Radio>
            ))}
          </VStack>
        </RadioGroup>
        <Button
          colorScheme="blue"
          onClick={onSubmit}
          isDisabled={!selectedAnswer}
          mt={4}
        >
          Submit Answer
        </Button>
      </VStack>
    </Box>
  );
};

export default QuestionCard;

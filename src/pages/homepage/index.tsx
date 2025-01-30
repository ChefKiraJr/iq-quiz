import type React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/biodata");
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      bgGradient="linear(to-r, teal.500, blue.500)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8}>
        <Heading
          as="h1"
          size="2xl"
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.4)"
        >
          IQ Test Challenge
        </Heading>
        <Button
          size="lg"
          colorScheme="whiteAlpha"
          onClick={handleStart}
          _hover={{ bg: "whiteAlpha.300" }}
          _active={{ bg: "whiteAlpha.400" }}
          shadow="md"
        >
          Start Test
        </Button>
      </VStack>
    </Box>
  );
};

export default HomePage;

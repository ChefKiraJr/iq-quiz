import type React from "react";
import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTestStore } from "../../store/testStore";
import { UserBiodata } from "../../types";

const BiodataForm: React.FC = () => {
  const navigate = useNavigate();
  const setBiodata = useTestStore((state) => state.setBiodata);
  const [formData, setFormData] = useState<UserBiodata>({
    name: "",
    age: 0,
    education: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number.parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBiodata(formData);
    navigate("/questions");
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      bgGradient="linear(to-r, cyan.500, blue.500)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" p={6} rounded="md" w={64}>
        <VStack spacing={4} align="flex-start">
          <Heading as="h2" size="lg">
            Your Information
          </Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input
              name="age"
              type="number"
              onChange={handleChange}
              value={formData.age || ""}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Education Level</FormLabel>
            <Select
              name="education"
              onChange={handleChange}
              value={formData.education}
              required
            >
              <option value="">Select...</option>
              <option value="high_school">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">Ph.D.</option>
            </Select>
          </FormControl>
          <Button width="full" mt={4} type="submit" onClick={handleSubmit}>
            Start Test
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default BiodataForm;

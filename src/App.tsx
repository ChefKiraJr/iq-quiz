import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import HomePage from "./pages/homepage";
import QuestionsPage from "./pages/question";
import ResultsPage from "./pages/results";
import BiodataForm from "./pages/biodata";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biodata" element={<BiodataForm />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

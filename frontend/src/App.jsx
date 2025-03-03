
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import Navbar from "./helpers/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />

      <Routes>
 				<Route path='/' element={<HomePage />} />
 				<Route path='/create' element={<CreatePage />} />
 			</Routes>
    </Box>
  );
}

export default App;



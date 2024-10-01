import { Box, ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight="100vh"
        backgroundColor="#1E192C"
        padding="25px"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card />
      </Box>
    </ChakraProvider>
  );
}

export default App;

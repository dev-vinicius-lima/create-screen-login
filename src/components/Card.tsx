import { Box, Center, Input } from "@chakra-ui/react";
import Button from "./Button";
import { login } from "../services/login";

export const Card = () => {
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="50px">
      <Center marginBottom={"25px"}>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" width={"100%"} variant={"flushed"} />
      <Input placeholder="password" width={"100%"} variant={"flushed"} />
      <Center>
        <Button children="Login" onClick={login} />
      </Center>
    </Box>
  );
};

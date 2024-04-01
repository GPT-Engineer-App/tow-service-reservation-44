import React from "react";
import { Box, Button, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading as="h1" mb={6}>
        Login
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue" type="submit">
        Login
      </Button>
    </Box>
  );
};

export default Login;

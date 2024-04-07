import React from "react";
import { Box, Button, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Placeholder for actual form submission logic
    console.log("Form submitted");
  };

  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading as="h1" mb={6}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}> {/* Add form element and submit handler */}
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="teal" _hover={{ transform: "scale(1.05)" }} type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;

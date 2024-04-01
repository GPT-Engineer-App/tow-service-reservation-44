import React, { useState } from "react";
import { Box, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://backengine-93sw.fly.dev";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 204) {
        toast({
          title: "Signup Successful",
          description: "You can now log in with your credentials",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        const errorData = await response.json();
        toast({
          title: "Signup Failed",
          description: errorData.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Signup</Heading>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} mb={4} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mb={4} />
      <Button colorScheme="teal" _hover={{ transform: "scale(1.05)" }} onClick={handleSignup}>
        Signup
      </Button>
    </Box>
  );
};

export default Signup;

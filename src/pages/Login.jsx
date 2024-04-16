//src/pages/Login.jsx
import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Simular una solicitud HTTP de inicio de sesión
      const response = await fetch("URL_DEL_BACKEND/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Iniciar sesión exitosa
        navigate("/profile"); // Redirigir al usuario al perfil después del inicio de sesión
      } else {
        // Iniciar sesión fallida
        const errorData = await response.json();
        toast({
          title: "Login Failed",
          description: errorData.message || "Something went wrong. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading as="h1" mb={6}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" _hover={{ transform: "scale(1.05)" }} type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;

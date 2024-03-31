import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Select, Flex, Spacer, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaTruck } from "react-icons/fa";

const API_URL = "https://backengine-93sw.fly.dev";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        setIsLoggedIn(true);
        toast({
          title: "Login Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Login Failed",
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
      <Flex align="center" mb={8}>
        <FaTruck size={32} />
        <Heading ml={4}>Tow Truck Service Booking</Heading>
        <Spacer />
        {isLoggedIn ? (
          <Text>Welcome, {email}</Text>
        ) : (
          <>
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} mr={4} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mr={4} />
            <Button leftIcon={<FaSignInAlt />} onClick={handleLogin} mr={4}>
              Login
            </Button>
            <Button leftIcon={<FaUserPlus />} onClick={handleSignup}>
              Signup
            </Button>
          </>
        )}
      </Flex>

      {isLoggedIn && (
        <Box>
          <Heading size="md" mb={4}>
            Book a Tow Truck Service
          </Heading>
          <Select placeholder="Select service type" mb={4}>
            <option value="towing">Towing</option>
            <option value="flatbed">Flatbed</option>
            <option value="roadside">Roadside Assistance</option>
          </Select>
          <Input placeholder="Current Location" mb={4} />
          <Input placeholder="Destination" mb={4} />
          <Input type="datetime-local" mb={4} />
          <Button colorScheme="blue" mb={8}>
            Confirm Booking
          </Button>

          <Heading size="md" mb={4}>
            Service Tracking
          </Heading>
          {/* TODO: Implement service tracking */}

          <Heading size="md" mb={4}>
            Payment
          </Heading>
          {/* TODO: Implement payment integration */}

          <Heading size="md" mb={4}>
            Service History
          </Heading>
          {/* TODO: Implement service history */}

          <Heading size="md" mb={4}>
            Service Rating
          </Heading>
          {/* TODO: Implement service rating */}
        </Box>
      )}
    </Box>
  );
};

export default Index;

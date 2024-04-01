import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Tow Truck Service
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/login" mr={4} _hover={{ textDecoration: "none", bg: "blue.500", color: "white" }}>
          Login
        </Link>
        <Link as={RouterLink} to="/signup">
          Signup
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;

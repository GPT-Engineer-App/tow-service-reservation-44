import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
        Thank You!
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Your booking has been confirmed.
      </Text>
      <Text color={"gray.500"} mb={6}>
        We appreciate your business and will do our best to meet your service expectations.
      </Text>
      <Link to="/dashboard">
        <Button colorScheme="teal" bgGradient="linear(to-r, teal.400, teal.500, teal.600)" color="white" variant="solid">
          Go to Dashboard
        </Button>
      </Link>
    </Box>
  );
}

export default ThankYouPage;

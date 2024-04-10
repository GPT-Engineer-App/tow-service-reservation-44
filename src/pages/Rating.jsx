//src/pages/Rating.jsx

import React, { useState } from "react";
import { Box, Heading, Text, Button, Input } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const Rating = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Submit rating and comment to the server
    navigate("/");
  };

  return (
    <Box>
      <Heading as="h1">Rate Your Service</Heading>
      <Text>Booking ID: {id}</Text>
      <Input
        type="number"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating (1-5)"
      />
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default Rating;

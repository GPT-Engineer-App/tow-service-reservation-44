import React, { useState } from "react";
import { Box, Heading, Input, Select, Button } from "@chakra-ui/react";

const BookingForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleBooking = () => {
    console.log("Booking submitted");
  };

  return (
    <Box>
      <Heading size="md" mb={4}>
        Book a Tow Truck Service
      </Heading>
      <Select placeholder="Select service type" value={serviceType} onChange={(e) => setServiceType(e.target.value)} mb={4}>
        <option value="towing">Towing</option>
        <option value="flatbed">Flatbed</option>
        <option value="roadside">Roadside Assistance</option>
      </Select>
      <Input placeholder="Current Location" value={origin} onChange={(e) => setOrigin(e.target.value)} mb={4} />
      <Input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} mb={4} />
      <Input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} mb={4} />
      <Button colorScheme="blue" onClick={handleBooking}>
        Confirm Booking
      </Button>
    </Box>
  );
};

export default BookingForm;

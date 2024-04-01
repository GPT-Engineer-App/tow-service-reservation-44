import React, { useState } from "react";
import { Box, Heading, Input, Select, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import InteractiveMap from "./InteractiveMap";

const API_URL = "https://api.example.com";

const BookingForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [distance, setDistance] = useState(0);

  const navigate = useNavigate();

  const handleBooking = () => {
    if (!serviceType || !name || !phone || !vehicleMake || !vehicleModel || !origin || !destination || !dateTime) {
      alert("Please fill in all required fields");
      return;
    }

    navigate("/booking-confirmation", {
      state: {
        serviceType,
        name,
        phone,
        vehicleMake,
        vehicleModel,
        origin,
        destination,
        dateTime,
        distance,
      },
    });
  };

  const handleMapData = (data) => {
    setOrigin(data.origin);
    setDestination(data.destination);
    setDistance(data.distance);
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
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} mb={4} />
      <Input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} mb={4} />
      <Input placeholder="Vehicle Make" value={vehicleMake} onChange={(e) => setVehicleMake(e.target.value)} mb={4} />
      <Input placeholder="Vehicle Model" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} mb={4} />
      <InteractiveMap onMapData={handleMapData} />
      <Text mb={4}>Total Distance: {distance} km</Text>
      <Input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} mb={4} />
      <Button colorScheme="teal" _hover={{ transform: "scale(1.05)" }} onClick={handleBooking}>
        Confirm Booking
      </Button>
    </Box>
  );
};

export default BookingForm;

import React, { useState } from "react";
import { Box, Heading, Select, Button, Text, useToast, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import InteractiveMap from "./InteractiveMap";

const BookingForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [distance, setDistance] = useState(0);

  const navigate = useNavigate();
  const toast = useToast();

  const handleBooking = () => {
    const errors = {};

    if (!serviceType) errors.serviceType = "Service type is required";
    if (!name) errors.name = "Name is required";
    if (!phone) errors.phone = "Phone number is required";
    if (!vehicleMake) errors.vehicleMake = "Vehicle make is required";
    if (!vehicleModel) errors.vehicleModel = "Vehicle model is required";
    if (!dateTime) errors.dateTime = "Date and time are required";

    if (Object.keys(errors).length === 0) {
      navigate("/booking-confirmation", {
        state: {
          serviceType,
          name,
          phone,
          vehicleMake,
          vehicleModel,
          dateTime,
          distance,
        },
      });
    } else {
      Object.values(errors).forEach((errorMessage) => {
        toast({
          title: "Validation Error",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    }
  };

  const handleMapData = (data) => {
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

import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Input, Select, Flex, Spacer, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_URL = "https://backengine-93sw.fly.dev";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  const [serviceType, setServiceType] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [serviceHistory, setServiceHistory] = useState([]);
  const [currentService, setCurrentService] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const navigate = useNavigate();
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
        // Decode user info from access token
        const tokenParts = data.accessToken.split(".");
        const encodedPayload = tokenParts[1];
        const decodedPayload = atob(encodedPayload);
        const { userId, role } = JSON.parse(decodedPayload);

        setUserId(userId);
        setUserRole(role);
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

        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBooking = async () => {
    if (!isLoggedIn && (!guestName || !guestEmail || !guestPhone)) {
      toast({
        title: "Booking Failed",
        description: "Please fill in all guest information fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      const response = await fetch(`${API_URL}/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          type: serviceType,
          origin_location: origin,
          destination_location: destination,
          date_time: dateTime,
          ...(isLoggedIn ? { client_user_id: userId } : { guest_name: guestName, guest_email: guestEmail, guest_phone: guestPhone }),
        }),
      });

      if (response.ok) {
        toast({
          title: "Booking Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        fetchServiceHistory();
      } else {
        const errorData = await response.json();
        toast({
          title: "Booking Failed",
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

  const fetchServiceHistory = async () => {
    try {
      const response = await fetch(`${API_URL}/services?client_user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setServiceHistory(data);
      } else {
        const errorData = await response.json();
        console.error("Failed to fetch service history:", errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRating = async (serviceId, rating, comment) => {
    try {
      const response = await fetch(`${API_URL}/ratings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          rating,
          comment,
          service_id: serviceId,
          client_user_id: userId,
        }),
      });

      if (response.ok) {
        toast({
          title: "Rating Submitted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Rating Failed",
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

  const fetchServiceDetails = async (serviceId) => {
    try {
      const response = await fetch(`${API_URL}/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentService(data);
      } else {
        const errorData = await response.json();
        console.error("Failed to fetch service details:", errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const processPayment = async (serviceId, method, amount) => {
    try {
      const response = await fetch(`${API_URL}/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          method,
          amount,
          service_id: serviceId,
        }),
      });

      if (response.ok) {
        toast({
          title: "Payment Processed",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Payment Failed",
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

  useEffect(() => {
    if (isLoggedIn) {
      fetchServiceHistory();
    }
  }, [isLoggedIn]);

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
          <Select placeholder="Select service type" value={serviceType} onChange={(e) => setServiceType(e.target.value)} mb={4}>
            <option value="towing">Towing</option>
            <option value="flatbed">Flatbed</option>
            <option value="roadside">Roadside Assistance</option>
          </Select>
          <Input placeholder="Current Location" value={origin} onChange={(e) => setOrigin(e.target.value)} mb={4} />
          <Input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} mb={4} />
          <Input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} mb={4} />
          {!isLoggedIn && (
            <Box>
              <p>Para realizar un seguimiento de su reserva, inicie sesión o regístrese.</p>
              <Button onClick={() => setIsLoggedIn(true)}>Iniciar sesión</Button>
              <Button onClick={() => navigate("/signup")}>Registrarse</Button>
              <br />
              <br />
              <Input placeholder="Nombre" value={guestName} onChange={(e) => setGuestName(e.target.value)} />
              <Input placeholder="Correo electrónico" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} />
              <Input placeholder="Número de teléfono" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} />
            </Box>
          )}
          <Button colorScheme="blue" onClick={handleBooking} mb={8}>
            Confirm Booking
          </Button>

          <Heading size="md" mb={4}>
            Service Tracking
          </Heading>
          {currentService ? (
            <>
              <Text>Service Type: {currentService.type}</Text>
              <Text>Origin: {currentService.origin_location}</Text>
              <Text>Destination: {currentService.destination_location}</Text>
              <Text>Date & Time: {currentService.date_time}</Text>
              <Text>Status: {currentService.status}</Text>
            </>
          ) : (
            <Text>No active service</Text>
          )}

          <Heading size="md" mb={4}>
            Payment
          </Heading>
          {currentService?.status === "finished" && (
            <>
              <Input placeholder="Payment Method" mb={4} />
              <Input placeholder="Amount" mb={4} />
              <Button onClick={() => processPayment(currentService.id, "method", 100)}>Pay Now</Button>
            </>
          )}

          <Heading size="md" mb={4}>
            Service History
          </Heading>
          {serviceHistory.map((service) => (
            <Box key={service.id} mb={4}>
              <Text>Service Type: {service.type}</Text>
              <Text>Date & Time: {service.date_time}</Text>
              <Text>Status: {service.status}</Text>
              <Button size="sm" onClick={() => fetchServiceDetails(service.id)}>
                View Details
              </Button>
            </Box>
          ))}

          <Heading size="md" mb={4}>
            Service Rating
          </Heading>
          {currentService?.status === "finished" && (
            <>
              <Input placeholder="Rating (1-5)" mb={4} />
              <Input placeholder="Comment" mb={4} />
              <Button onClick={() => handleRating(currentService.id, 5, "Great service!")}>Submit Rating</Button>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Index;

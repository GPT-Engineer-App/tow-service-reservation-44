//src/pages/Profile.jsx
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  // Supongamos que tienes un objeto de usuario que contiene la información del perfil
  const user = {
    name: "John Doe",
    email: "john@example.com",
    // Otros campos de perfil
  };

  return (
    <Box>
      <Heading as="h1">Profile</Heading>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      {/* Agrega otros campos del perfil aquí si es necesario */}
    </Box>
  );
};

export default Profile;

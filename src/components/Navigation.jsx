//navigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} position="fixed" top="0" left="0" w="full" zIndex="10">
      <Flex h="16" px="4" mx="auto" maxW="960" alignItems="center">
        <Link to="/">
          <Box fontSize="lg" fontWeight="semibold">Tu Logo</Box>
        </Link>
        <HStack ml="auto" spacing="4" display={{ base: "none", md: "flex" }}>
          <Link to="/">Inicio</Link>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/signup">Registrarse</Link>
        </HStack>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
      </Flex>

      <Flex
        as="nav"
        flexDir="column"
        pos="fixed"
        top="0"
        left="0"
        h="full"
        w="full"
        overflowY="auto"
        bg={bg}
        zIndex={100}
        display={isOpen ? "flex" : "none"}
      >
        <CloseIcon
          position="absolute"
          top="4"
          right="4"
          onClick={onClose}
        />
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/signup">Registrarse</Link>
      </Flex>
    </Box>
  );
};

export default Navigation;

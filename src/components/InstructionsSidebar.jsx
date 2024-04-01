import { Box, List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { FaRegLightbulb } from "react-icons/fa";

const InstructionsSidebar = () => {
  return (
    <Box p={5} border="1px" borderColor="gray.200" borderRadius="md" bg="gray.50">
      <Heading size="md" mb={3}>
        How to Book a Service
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaRegLightbulb} color="green.500" />
          Select the type of service you need.
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegLightbulb} color="green.500" />
          Enter your current location and destination.
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegLightbulb} color="green.500" />
          Choose a convenient date and time.
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegLightbulb} color="green.500" />
          Confirm your booking and get instant assistance.
        </ListItem>
      </List>
    </Box>
  );
};

export default InstructionsSidebar;

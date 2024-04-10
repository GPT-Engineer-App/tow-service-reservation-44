//src/pages/Index.jsx
import { Box, Flex, Spacer } from "@chakra-ui/react";
import BookingForm from "../components/BookingForm";
import InstructionsSidebar from "../components/InstructionsSidebar";

const Index = () => {
  return (
    <Flex p={5}>
      <Flex direction={{ base: "column", md: "row" }} flex="1">
        <Box flex="1">
          <BookingForm />
        </Box>
        <Spacer />
        <Box flex="1">
          <InstructionsSidebar />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;

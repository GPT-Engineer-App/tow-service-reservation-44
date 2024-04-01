import { Box, Flex, Spacer } from "@chakra-ui/react";
import BookingForm from "../components/BookingForm";
import InstructionsSidebar from "../components/InstructionsSidebar";

const Index = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} p={5}>
      <Box flex="1">
        <BookingForm />
      </Box>
      <Spacer />
      <Box flex="1">
        <InstructionsSidebar />
      </Box>
    </Flex>
  );
};

export default Index;

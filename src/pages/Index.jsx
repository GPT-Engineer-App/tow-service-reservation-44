import { Box, Heading, Text, Button, Input, Select, Flex, Spacer, useToast, VStack, HStack, Image } from "@chakra-ui/react";
import InstructionsSidebar from "../components/InstructionsSidebar";

const Index = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} p={5}>
      <Box flex="1">{}</Box>
      <Spacer />
      <Box flex="1">
        <InstructionsSidebar />
      </Box>
    </Flex>
  );
};

export default Index;

import React from "react";
import { Center, Box, Text, HStack } from "@chakra-ui/react";
import Logo from "../components/Forms/Logo";

const Loading = () => {
  return (
    <Center h="100vh">
      <HStack justifyContent="space-between">
        <Box marginBottom={70}>
          <Logo />
        </Box>
        <Box className="logo-container">
          <Text className="logo-main outline">Thullo</Text>
          <Text className="logo-main fill">Thullo</Text>
        </Box>
      </HStack>
    </Center>
  );
};

export default Loading;

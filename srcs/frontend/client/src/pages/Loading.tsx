import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center h="100vh">
      <Spinner thickness='12px' speed='1s' color="#2F80ED" height="150px" width="150px"/>
    </Center>
  );
};

export default Loading;

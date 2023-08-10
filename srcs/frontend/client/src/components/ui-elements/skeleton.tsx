import React from "react";
import { Container } from "./Wrappers";
import { Skeleton as ChakraSkeleton } from "@chakra-ui/react";

export const Skeleton: React.FC = () => {
  return (
    <Container variant="Card">
      <ChakraSkeleton height="100px" />
      <ChakraSkeleton height="20px" />
      <ChakraSkeleton height="20px" />
    </Container>
  );
};

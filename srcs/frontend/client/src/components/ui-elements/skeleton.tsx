import React from "react";
import {SkeletonCircle, SkeletonText} from "@chakra-ui/react";
import { Container } from "./Wrappers";

export const Skeleton: React.FC = () => {
  return (
    <Container variant='Card'>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Container>
  );
};

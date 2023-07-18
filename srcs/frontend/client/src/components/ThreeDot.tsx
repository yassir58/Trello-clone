import React from "react";
import { Button, chakra, Stack, Divider } from "@chakra-ui/react";

function ThreeDot() {
  return (
    <Stack
    >
      <Button
        py={3}
        borderRadius="xl"
        variant="ghost"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <chakra.small color='gray.500'  fontWeight='normal'>Rename</chakra.small>
      </Button>
      <Divider />
      <Button
        py={3}
        borderRadius="xl"
        variant="ghost"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <chakra.small color='gray.500'  fontWeight='normal'>Delete this list</chakra.small>
      </Button>
    </Stack>
  );
}

export default ThreeDot;

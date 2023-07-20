import React from "react";
import { Button, chakra, Stack, Divider } from "@chakra-ui/react";

function ThreeDot() {
  return (
    <Stack
    >
      <Button
        py={3}
        variant="ghost"
       
      >
        <chakra.small>Rename</chakra.small>
      </Button>
      <Divider />
      <Button
        py={3}
        borderRadius="xl"
        variant="ghostRed"
      >
        <chakra.small>Delete this list</chakra.small>
      </Button>
    </Stack>
  );
}

export default ThreeDot;

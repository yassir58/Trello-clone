import React from "react";
import { Button, chakra, Stack, Divider } from "@chakra-ui/react";

interface ListOptionProps {
  removeList:()=>void
}

export const ListOptions:React.FC<ListOptionProps> =({removeList})=> {
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
        onClick={removeList}
      >
        <chakra.small>Delete this list</chakra.small>
      </Button>
    </Stack>
  );
}


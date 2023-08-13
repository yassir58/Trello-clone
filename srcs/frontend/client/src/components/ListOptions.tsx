import React from "react";
import { Button, chakra, Stack, Divider } from "@chakra-ui/react";

interface ListOptionProps {
  removeList:()=>void
  editMode:(state:boolean)=>void
}

export const ListOptions:React.FC<ListOptionProps> =({removeList, editMode})=> {
  return (
    <Stack
    >
      <Button
        py={3}
        variant="ghost"
        onClick={()=>editMode (true)}
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


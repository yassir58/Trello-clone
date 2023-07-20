import React from "react";
import { Box, Button, Input, Wrap, HStack, Stack } from "@chakra-ui/react";

interface AddCardProps {
  cancelHandler: () => void;
}

const AddCard:React.FC<AddCardProps> = ({cancelHandler}) => {
  return (
    <Box w='260px' bg="white" borderWidth="1px" borderRadius="xl" p={5} shadow="md">
      <Wrap spacing={8}>
        <Input
          variant="unstyled"
          placeholder="Enter a title for this card..."
        />
        <HStack>
        <Button variant='green' onClick={()=>{
          cancelHandler();
        }}>
          Save
        </Button>
        <Button variant="ghost"
        onClick={cancelHandler}
        >
          cancel
        </Button>
        </HStack>
      </Wrap>
    </Box>
  );
};

interface addListProps {
  cancelHandler: () => void;
}

export const AddList:React.FC<addListProps> = ({cancelHandler}) => {
  return (
    <Stack>
      <Input variant={'outline'} placeholder={'Enter list title...'} bg='white' />
      <HStack>
        <Button variant='green' onClick={()=>{}} >add</Button>
        <Button variant='ghost' onClick={cancelHandler} >cancel</Button>
      </HStack>
    </Stack>
  )
}

export default AddCard;

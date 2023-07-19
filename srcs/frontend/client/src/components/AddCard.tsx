import React from "react";
import { Box, Button, Input, Wrap, HStack } from "@chakra-ui/react";

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
        <Button borderRadius="xl" px={5} py={2} size="sm" colorScheme="green" onClick={()=>{
          cancelHandler();
        }}>
          Save
        </Button>
        <Button borderRadius='xl' size='sm' variant='ghost' color='red' sx={{
          _hover:{
            border:'1px solid red'
          }
        }}
        onClick={cancelHandler}
        >
          cancel
        </Button>
        </HStack>
      </Wrap>
    </Box>
  );
};

export default AddCard;

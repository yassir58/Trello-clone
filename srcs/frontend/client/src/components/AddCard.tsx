import { Box, Button, Input, Wrap } from "@chakra-ui/react";

const AddCard = () => {
  return (
    <Box bg="white" borderWidth="1px" borderRadius="xl" p={5} shadow="md">
      <Wrap spacing={8}>
        <Input
          variant="unstyled"
          placeholder="Enter a title for this card..."
        />
        <Button borderRadius="xl" px={5} py={2} size="sm" colorScheme="green">
          Save
        </Button>
      </Wrap>
    </Box>
  );
};

export default AddCard;

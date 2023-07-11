import { Button, Text, Stack, Divider } from "@chakra-ui/react";

function ThreeDot() {
  return (
    <Stack
      padding={3}
      borderRadius="xl"
      direction="column"
      bg="white"
      shadow="md"
    >
      <Button
        py={8}
        borderRadius="xl"
        variant="ghost"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Text>Rename</Text>
      </Button>
      <Divider />
      <Button
        py={8}
        borderRadius="xl"
        variant="ghost"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Text>Delete</Text>
      </Button>
    </Stack>
  );
}

export default ThreeDot;

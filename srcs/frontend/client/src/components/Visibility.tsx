import React from "react";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Button,
  Wrap,
  Stack,
} from "@chakra-ui/react";

const Visibility = () => {
  return (
    <Card borderRadius="xl" shadow="md" marginTop={10} size='sm'>
      <CardHeader>
        <Heading size="sm">Visibility</Heading>
        <Text size="md" color="gray">
          choose who can see the board.
        </Text>
      </CardHeader>
      <CardBody marginTop={-4}>
        <Stack>
          <Button py={10} px={3} borderRadius="xl" bg="white" variant="solid">
            <Stack>
              <Wrap align="center">
                <Heading size="xs">Public</Heading>
              </Wrap>
              <Text fontSize="sm" color="grey">
                Anyone on the internet can see this.
              </Text>
            </Stack>
          </Button>
          <Button py={10} px={3} borderRadius="xl" bg="white" variant="solid">
            <Stack marginLeft={-5}>
              <Wrap align="center">
                <Heading size="xs">Private</Heading>
              </Wrap>
              <Text fontSize="sm" color="grey">
                only board member can see this.
              </Text>
            </Stack>
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Visibility;

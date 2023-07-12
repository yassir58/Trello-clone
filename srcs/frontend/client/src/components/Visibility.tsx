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

import { MdPublic } from "react-icons/md";
import { MdLock } from "react-icons/md";

const Visibility = () => {
  return (
    <Card borderRadius="xl" shadow="md" width={234} height={220}>
      <CardHeader>
        <Heading width={49} height={18} fontSize="12" as="b">
          Visibility
        </Heading>
        <Text fontSize="12" color="gray">
          choose who can see the board.
        </Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <Stack px={0} mx={0}>
          <Button
            borderRadius="xl"
            variant="ghost"
            py={7}
            marginBottom={0}
          >
            <Wrap>
              <Wrap spacingX={0}>
                <MdPublic />
                <Heading
                  width={49}
                  height={18}
                  fontSize="12"
                  as="b"
                  paddingLeft={0}
                  marginLeft={0}
                >
                  Public
                </Heading>
                <Text fontSize="9" color="gray">
                  Anyone on the internet can see this.
                </Text>
              </Wrap>
            </Wrap>
          </Button>
          <Button
            borderRadius="xl"
            variant="ghost"
            py={7}
            marginBottom={0}
          >
            <Wrap>
              <Wrap spacingX={0}>
                <MdLock />
                <Heading
                  width={49}
                  height={18}
                  fontSize="12"
                  as="b"
                  paddingLeft={0}
                  marginLeft={0}
                >
                  Private
                </Heading>
              </Wrap>
              <Text fontSize="9" color="gray">
                only board member can see this.
              </Text>
            </Wrap>
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Visibility;

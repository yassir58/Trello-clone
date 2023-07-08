import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

const InviteToBoard = () => {
  return (
    <Card borderRadius="xl" shadow="md" marginTop={10} px={2}>
      <CardHeader mx={-3}>
        <Heading size="sm">invite to Board</Heading>
        <Text size="md" color="gray">
          Search for people you want to invite
        </Text>
      </CardHeader>
      <CardBody mx={-3} marginTop={-4}>
        <InputGroup>
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
          <Input
            shadow="md"
            bg="white"
            variant="filled"
            type="search"
            placeholder="user"
          />
        </InputGroup>
        <Stack marginTop={7} borderRadius="xl" shadow="md">
          <Button py={8} px={3} borderRadius="xl" bg="white" variant="solid">
            SomeRandomUser
          </Button>
          <Button py={8} px={3} borderRadius="xl" bg="white" variant="solid">
            SomeRandomUser
          </Button>
          <Button py={8} px={3} borderRadius="xl" bg="white" variant="solid">
            SomeRandomUser
          </Button>
        </Stack>
      </CardBody>
      <CardFooter mx={-3}>
        <Button mx="auto" px={8} colorScheme="blue" borderRadius="lg">
          Invite
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InviteToBoard;

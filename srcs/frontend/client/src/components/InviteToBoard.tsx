import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BiSolidUser } from "react-icons/bi";
import ButtonStack from "./ButtonStack";

const InviteToBoard = () => {
  return (
    <Card>
      <CardHeader mx={"8px"} p="10px" my={"0px"}>
        <Text fontSize={"12px"}>Invite to Board</Text>
        <Text fontSize={"12px"} color="gray">
          Search for people you want to invite
        </Text>
      </CardHeader>
      <CardBody m={"9px"} px={0} py={0}>
        <Input w={"228px"} h={"34px"} variant="outline" placeholder="user" />
        <Stack
          borderColor={"lightgray"}
          borderWidth={"1px"}
          borderRadius={"8px"}
          shadow={"md"}
          p={"12px"}
        >
          <ButtonStack
            onClick={[() => {}]}
            buttons={["User", "User", "User"]}
            style="unstyled"
            width="100%"
            height="32px"
            spaceBetween="15px"
            Icons={[<BiSolidUser />, <BiSolidUser />, <BiSolidUser />]}
          />
        </Stack>
      </CardBody>
      <CardFooter my={"10px"} py={0}>
        <Button
          mx="auto"
          w={"74px"}
          h={"30px"}
          variant={"primary"}
          fontSize={"10px"}
        >
          Invite
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InviteToBoard;

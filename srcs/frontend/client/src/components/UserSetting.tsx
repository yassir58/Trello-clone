import React from "react";
import {
  Text,
  Image,
  Card,
  CardBody,
  CardHeader,
  Wrap,
  Button,
  Switch,
  Stack,
} from "@chakra-ui/react";

import InputStack from "./InputStack";

interface Props {
	profilePic: string;
}

const UserSetting = ({profilePic} : Props) => {
  return (
    <Card w="414px" h="672px">
      <CardHeader mx={"60px"} alignItems="center" justifyContent="center">
        <Wrap align="center" spacing={"20px"}>
          <Image
            w={"92px"}
            h="92px"
            src={profilePic}
            borderRadius={"8px"}
          ></Image>
          <Text fontSize="20px">User Name</Text>
        </Wrap>
      </CardHeader>
      <CardBody mx={0}>
        <Stack alignItems="center" justifyContent="center">
          <InputStack
            placeholder={["User Name", "Bio"]}
            style="outline"
            width={["364px", "364px"]}
            height={["40px", "131px"]}
            spaceBetween="24px"
          ></InputStack>
          <Text as="b" fontSize={"12px"} my="10px">
            Change Password
          </Text>
          <InputStack
            placeholder={["Old Password", "New Password"]}
            style="outline"
            width={["364px", "364px"]}
            height={["40px", "40px"]}
            spaceBetween="24px"
          ></InputStack>
          <Stack spacing={"41px"}>
            <Wrap spacingX="203px" mx={"20px"} my="10px">
              <Text as="b" fontSize={"12px"}>
                Dark Mode
              </Text>
              <Switch colorScheme="blue" />
            </Wrap>
            <Button margin={"auto"} variant={"primary"} w={"92px"} h={"35px"}>
              Save
            </Button>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserSetting;

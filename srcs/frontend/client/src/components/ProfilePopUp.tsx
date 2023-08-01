import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Wrap,
  Image,
} from "@chakra-ui/react";
import ButtonStack from "./ButtonStack";
import { useNavigate } from "react-router-dom";

interface Props {
  profilePic: string;
}

const ProfilePopUp = ({ profilePic }: Props) => {
  const navigate = useNavigate();
  const profile = () => navigate("/profilePage");
  return (
    <Card w="208px" h="255px" px="39px">
      <CardHeader mx={0} px={0}>
        <Wrap align="center" spacing="10px">
          <Image
            w={"39px"}
            h="39px"
            src={profilePic}
            borderRadius={"8px"}
          ></Image>
          <Text as="b" fontSize="12px">
            Xanthe Neal
          </Text>
        </Wrap>
      </CardHeader>
      <CardBody py={2}>
        <ButtonStack
          buttons={["profile setting", "Boards", "log out"]}
          onClick={[profile]}
          style="unstyled"
          width="100px"
          height="30px"
          spaceBetween="25px"
        ></ButtonStack>
      </CardBody>
    </Card>
  );
};

export default ProfilePopUp;

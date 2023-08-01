import React from "react";
import { Text, Stack } from "@chakra-ui/react";

import { MdPublic } from "react-icons/md";
import { MdLock} from "react-icons/md";
import DescriptiveBtnStack from "./DescriptiveBtnStack";

const Visibility = () => {
  return (
    <Stack
      spacing={"16px"}
      p={"12px"}
     
    >
      <Stack spacing={"2px"}>
        <Text as={"b"} fontSize={"12px"} color={"#4f4f4f"}>
          Visibility
        </Text>
        <Text fontSize={"12px"} color={"#828282"}>
          Choose who can see this board
        </Text>
      </Stack>
      <DescriptiveBtnStack
        buttons={["Public", "Private"]}
        descBtn={[
          "anyone on the internet can see this.",
          "Only board members can see this.",
        ]}
        style="ghost"
        w="210px"
        h="58px"
        icons={[<MdPublic color={"#4f4f4f"} />, <MdLock color={"#4f4f4f"} />]}
        spaceBetween="12px"
      ></DescriptiveBtnStack>
    </Stack>
  );
};

export default Visibility;

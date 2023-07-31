import React from "react";

import {
  Stack,
  Text,
  Image,
  Wrap,
} from "@chakra-ui/react";
import HorizontalButton from "./HorizontalButton";

interface Props {
  date: string;
  attachementTitle: string;
  imageSrc: string;
}

const Attachements = (props: Props) => {
  return (
    <Wrap spacingX={"14px"}>
      <Image
        w={"80px"}
        h="60px"
        src={props.imageSrc}
        borderRadius={"8px"}
      ></Image>
      <Stack spacing={"6px"}>
        <Stack spacing={"1px"}>
          <Text fontSize={"8px"} color={"Gray"}>
            {props.date}
          </Text>
          <Text fontSize={"10px"} as={"b"}>
            {props.attachementTitle}
          </Text>
        </Stack>
        <HorizontalButton
          buttons={["Download", "Delete"]}
          width="70px"
          height="25px"
          style="outline"
          spaceBetween={"9px"}
        />
      </Stack>
    </Wrap>
  );
};

export default Attachements;

import React from "react";
import { Button, Stack, Text, Wrap } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  buttons: string[];
  descBtn: string[];
  spaceBetween: string;
  style: string;
  w: string;
  h: string;
  icons?: ReactNode[];
}

const DescriptiveBtnStack = (props: Props) => {
  return (
    <Stack spacing={props.spaceBetween}>
      {props.buttons.map((button, index) => (
        <Button variant={props.style} w={props.w} h={props.h} px={"12px"}>
          <Stack align={"start"}>
            <Wrap>
              {!(props.icons === undefined) && props.icons[index]}
              <Text color={"#4f4f4f"} fontSize={"12px"} as="b">
                {button}
              </Text>
            </Wrap>
            <Text color={"#828282"} fontSize={"10px"}>
              {props.descBtn[index]}
            </Text>
          </Stack>
        </Button>
      ))}
    </Stack>
  );
};

export default DescriptiveBtnStack;

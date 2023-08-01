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

const DescriptiveBtnStack:React.FC<Props> = ({
  buttons,
  descBtn,
  spaceBetween,
  style,
  w,
  h,
  icons,
  
}) => {
  return (
    <Stack spacing={spaceBetween}>
      {buttons.map((button, index) => (
        <Button variant={style} w={w} h={h} px={"12px"}>
          <Stack align={"start"}>
            <Wrap>
              {!(icons === undefined) && icons[index]}
              <Text color={"#4f4f4f"} fontSize={"12px"} as="b">
                {button}
              </Text>
            </Wrap>
            <Text color={"#828282"} fontSize={"10px"}>
              {descBtn[index]}
            </Text>
          </Stack>
        </Button>
      ))}
    </Stack>
  );
};

export default DescriptiveBtnStack;

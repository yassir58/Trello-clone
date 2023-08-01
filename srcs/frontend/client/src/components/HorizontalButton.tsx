import React from "react";
import { Text, Button, Wrap } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  buttons: string[];
  style: string;
  width: string;
  height: string;
  spaceBetween: string;
  Icons?: ReactNode[];
}

const HorizontalButton = (props: Props) => {
  return (
    <Wrap spacing={props.spaceBetween}>
      {props.buttons.map((button, index) => (
        <Button variant={props.style} w={props.width} h={props.height}>
          <Wrap align="center" spacingX="11px">
            {!(props.Icons === undefined) && props.Icons[index]}
            <Text fontSize="12px">{button}</Text>
          </Wrap>
        </Button>
      ))}
    </Wrap>
  );
};

export default HorizontalButton;

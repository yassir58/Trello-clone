import React from "react";
import { Text, Button, Wrap, Stack, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  buttons: string[];
  onClick: (() => void)[];
  style: string;
  width: string;
  height: string;
  spaceBetween: string;
  Icons?: ReactNode[];
}

const ButtonStack = (props: Props) => {
  return (
    <>
      <Stack spacing={props.spaceBetween} mx={0} px={0}>
        {props.buttons.map((button, index) => (
          <Button
		    onClick={props.onClick[index]}
            variant={props.style}
            w={props.width}
            h={props.height}
            textAlign="center"
          >
            <Flex alignItems="center" justifyContent="center">
              <Wrap align="center" spacingX="11px">
                {!(props.Icons === undefined) && props.Icons[index]}
                <Text fontSize="12px">{button}</Text>
              </Wrap>
            </Flex>
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default ButtonStack;

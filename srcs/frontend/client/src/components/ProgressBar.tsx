import React from "react";
import { Progress, Text, Wrap } from "@chakra-ui/react";

interface Props {
  base: number;
  marked: number;
}

const ProgressBar = (props: Props) => {
	const percent:number = Math.floor((props.marked / props.base) * 100);

  return (
    <>
      <Wrap spacing={"8px"} align={"center"}>
        <Text>{(percent).toString()}</Text>
        <Progress w={"400px"} value={percent} colorScheme="blue" />
      </Wrap>
    </>
  );
};

export default ProgressBar;

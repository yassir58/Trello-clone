import React from "react";
import { Checkbox } from "@chakra-ui/react";

interface Props  {
	checklistName: string;
}

const CheckBoxField = (props: Props) => {
  return (
	<Checkbox>{props.checklistName}</Checkbox>
  )
}

export default CheckBoxField
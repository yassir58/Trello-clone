import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import PromptWrap from "./PromptWrap";

interface Props {
  checklist:checklist
}

const PromptField = ({checklist}:Props) => {
  const [state, setState] = useState(1);

  function handleClick() {
    !state ? setState(1) : setState(0);
  }

  if (state) {
    return (
      <Button
        variant={"primary"}
        w={"60px"}
        h={"30px"}
        fontSize={"12px"}
        onClick={handleClick}
      >
        Add
      </Button>
    );
  }
  return (
    <PromptWrap
      checklist={checklist}
      cancelClick={handleClick}
    />
  );
};

export default PromptField;

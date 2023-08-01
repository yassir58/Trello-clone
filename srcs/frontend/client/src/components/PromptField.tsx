import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import PromptWrap from "./PromptWrap";

interface Props {
  checklists: string[];
  addClick: React.Dispatch<React.SetStateAction<string[]>>;
}

const PromptField = ({ checklists, addClick }: Props) => {
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
      checklists={checklists}
      cancelClick={handleClick}
      addClick={addClick}
    />
  );
};

export default PromptField;

import React from "react";
import { Button, Input, Wrap } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  checklists: string[];
  cancelClick: () => void;
  addClick: React.Dispatch<React.SetStateAction<string[]>>;
}

const PromptWrap = ({ checklists, cancelClick, addClick }: Props) => {
  const [input, setInput] = useState("");
  const handleAddchecklist = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  console.log(checklists);
  const handleAddClick = () => {
    addClick((checklists) => [...checklists, input]);
  };

  return (
    <Wrap spacingX={"20px"} alignItems={"center"}>
      <Input
        variant={"outline"}
        w={"269px"}
        h={"30px"}
        placeholder="Add an item"
        onChange={handleAddchecklist}
      ></Input>
      <Button
        variant={"primary"}
        w={"60px"}
        h={"30px"}
        fontSize={"12px"}
        onClick={handleAddClick}
      >
        Add
      </Button>
      <Button
        variant={"unstyled"}
        fontSize={"12px"}
        w={"60px"}
        h={"30px"}
        onClick={cancelClick}
      >
        cancel
      </Button>
    </Wrap>
  );
};
export default PromptWrap;

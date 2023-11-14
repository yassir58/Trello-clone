import React from "react";
import { Button, Input, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

interface Props {
  cancelClick: () => void;
  checklist:checklist
}

const PromptWrap = ({ cancelClick, checklist}: Props) => {
  const [input, setInput] = useState("");
  const {newTaskMutation} = useTasks (checklist)

  const handleAddchecklist = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const addTask = () => {
    newTaskMutation.mutate (input);
    setInput ("");
    cancelClick ();
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
        onClick={addTask}
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

import React from "react";
import {
  Card,
  Text,
  Wrap,
  Stack,
  CardHeader,
  Button,
  CardBody,
  Checkbox,
} from "@chakra-ui/react";
import { MdChecklist } from "react-icons/Md";
import ProgressBar from "./ProgressBar";
import PromptField from "./PromptField";
import { useState } from "react";

const Checklist = () => {
  const [checklist, updateChecklist] = useState(["chi haja"]);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked: boolean = event.target.checked;
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };

  return (
    <>
      <Card p={"40px"}>
        <CardHeader mx={0} px={0} my={0} py={0}>
          <Wrap spacingX={"356px"} align={"center"}>
            <Wrap>
              <MdChecklist />
              <Text fontSize={"12px"} as={"b"}>
                Checklists
              </Text>
            </Wrap>
            <Button fontSize={"10px"} variant={"unstyled"}>
              Delete
            </Button>
          </Wrap>
        </CardHeader>
        <CardBody mx={0} px={0} my={"27px"} py={0}>
          <Stack spacing={"28px"}>
            <ProgressBar
              base={checklist.length}
              marked={checkedCount}
            ></ProgressBar>
            <Stack spacing={"18px"}>
              {checklist.map((element) => (
                <Checkbox onChange={handleCheckboxChange}>{element}</Checkbox>
              ))}
            </Stack>
            <PromptField
              checklists={checklist}
              addClick={updateChecklist}
            ></PromptField>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default Checklist;

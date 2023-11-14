import React, { useEffect } from "react";
import { Card, Text, Wrap, Stack, CardHeader, Button, CardBody, Checkbox , Icon, HStack} from "@chakra-ui/react";
import { MdChecklist } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import PromptField from "./PromptField";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { useChecklists } from "../hooks/useChecklists";
import { DeleteIcon } from "@chakra-ui/icons";

interface props {
  checklist: checklist;
}

interface taskType {
  data: any;
  isLoading: boolean;
  editeTaskMutation: any;
  deleteTaskMutation:any;
}

const Checklist: React.FC<props> = ({ checklist }) => {
  const { data, editeTaskMutation, isLoading , deleteTaskMutation}: taskType = useTasks(checklist!);
  const {deleteChecklistMutation} = useChecklists (checklist.cardId!)
  const [checkedCount, setCheckedCount] = useState(0);
  const [count, setCount] = useState(0);

  const handleCheckboxChange = (task: Task) => {
    editeTaskMutation.mutate(task);
  };

  useEffect(() => {
    if (data) {
      setCount(data.count);
      const len = data.tasks.filter((item: any) => item.resolved).length;
      setCheckedCount(len);
    }
  }, [data]);

  if (isLoading)
    return <Text>loading</Text>
  return (
    <>
        <Card p={"40px"}>
          <CardHeader mx={0} px={0} my={0} py={0}>
            <Wrap spacingX={"356px"} align={"center"}>
              <Wrap>
                <MdChecklist />
                <Text fontSize={"12px"} as={"b"}>
                  {checklist.name}
                </Text>
              </Wrap>
              <Button onClick={()=> deleteChecklistMutation.mutate (checklist.id)} fontSize={"15px"} variant={"ghost"}>
                Delete
              </Button>
            </Wrap>
          </CardHeader>
          <CardBody mx={0} px={0} my={"27px"} py={0}>
            <Stack spacing={"28px"}>
              <ProgressBar base={count} marked={checkedCount}></ProgressBar>
              <Stack spacing={"18px"}>
                {data &&
                  data.count > 0 &&
                  data.tasks.map((element: any, index: number) => (
                    <HStack key={index} justifyContent={'space-between'} w='100%'>
                      <Checkbox  onChange={() => handleCheckboxChange(element)}>
                      {element.content}
                    </Checkbox>
                    <Icon as={DeleteIcon} onClick={()=> deleteTaskMutation.mutate (element.id)}/>
                    </HStack>
                  ))}
              </Stack>
              <PromptField checklist={checklist} />
            </Stack>
          </CardBody>
        </Card>
     
    </>
  );
};

export default Checklist;

import React, {useContext, useState} from "react";
import {
  Button,
  Input,
  Text,
  Stack,
  FormControl,
  Heading,
  HStack
} from "@chakra-ui/react";
import { popOverContext } from "../context/ContextScheme";
import { useChecklists } from "../hooks/useChecklists";
import { Card} from "../context/ContextScheme";

interface   props {
  card?:Card
}
const AddChecklist:React.FC<props> = ({card}) => {

  const {onClose} = useContext (popOverContext)
  const {newChecklistMutation} = useChecklists (card?.id!)
  const [checklistName, setChecklistName] = useState ("")
  return (
       <Stack spacing={5} py={6}>
         <Heading fontSize="12px" fontStyle="semi-bold">
          Checklist
        </Heading>
        <FormControl>
          <Stack spacing={2}>
          <Text fontSize="12px" color="gray">
          Add a checklist title
        </Text>
        <Input
          variant="outline"
          w="228px"
          h="34px"
          placeholder="Checklist title"
          onChange={(e) => setChecklistName (e.target.value)}
        ></Input>
          </Stack>
        </FormControl>
        <HStack spacing={4}>
        <Button variant="primary" w="74px" h="30px" fontSize="10px" 
          onClick={()=>{
            newChecklistMutation.mutate ({
              cardId:card?.id!,
              checklistName:checklistName
            })
            onClose! ()
          }}
        >
          Add
        </Button>
        <Button variant='ghost' onClick={onClose}>cancel</Button>
        </HStack>
       </Stack>
  );
};

export default AddChecklist;

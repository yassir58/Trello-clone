import React, { useState } from "react";
import { HStack, Stack, Text, Button, InputGroup , Input, InputRightElement} from "@chakra-ui/react";
import { useComments } from "../hooks/useComments";

interface props {
  comment: comment;
}

export const CommentCard: React.FC<props> = ({ comment }) => {

    const {deleteCommentMutation, updateCommentMutation} = useComments (comment.cardId!)
    const [editeMode,setEditeMode] = useState (false)
    const [value, setValue] = useState (comment.content)

    const handleEdite = ()=>{
        updateCommentMutation.mutate ({content:value, comment:comment.id})
        setValue ('')
        setEditeMode (false)
    }

    const handleEnter = (event:React.KeyboardEvent<HTMLInputElement>) =>
    {
        if (event.key === 'Enter')
            handleEdite ()
    }
  return (
    <Stack spacing={4}>
      <HStack w="100%" justifyContent={"space-between"}>
        <Stack>
          <Text>{comment.createdAt}</Text>
        </Stack>

        <HStack spacing={3}>
          <Button variant={"ghost"} onClick={() => setEditeMode (true)}>edite</Button>
          <Button variant={"ghost"} onClick={()=> deleteCommentMutation.mutate (comment.id)}>delete</Button>
        </HStack>
      </HStack>
      {editeMode ? <InputGroup size='md'>
        <Input type='text' value={value} onKeyDown ={handleEnter} onChange={(e) => setValue (e.target.value)} /> 
        <InputRightElement>
        <Button colorScheme="green" onClick={handleEdite}>done</Button>
        <Button variant='ghost' onClick={()=> setEditeMode (false)}>cancel</Button>
        </InputRightElement>
      </InputGroup> :<Text>{comment.content}</Text>}
    </Stack>
  );
};

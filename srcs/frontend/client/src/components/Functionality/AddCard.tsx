import React from "react";
import { Box, Button, Input, Wrap, HStack, Stack } from "@chakra-ui/react";

interface AddCardProps {
  cancelHandler: () => void;
  action: (title:string) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

const AddCard:React.FC<AddCardProps> = ({cancelHandler, action, ref}) => {
  const [title, setTitle] = React.useState<string>('')
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  return (
    <Box w='260px' bg="white" borderWidth="1px" borderRadius="xl" p={5} shadow="md">
      <Wrap spacing={8}>
        <Input
          variant="unstyled"
          placeholder="Enter a title for this card..."
          value={title}
          onChange={onChangeHandler}
          ref={ref}
        />
        <HStack>
        <Button variant='green' onClick={()=>{
          action(title);
          cancelHandler();
        }}>
          Save
        </Button>
        <Button variant="ghost"
        onClick={cancelHandler}
        >
          cancel
        </Button>
        </HStack>
      </Wrap>
    </Box>
  );
};

interface addListProps {
  actionHandler: (title:string) => void;
  cancelHandler: () => void;
}

export const AddList:React.FC<addListProps> = ({cancelHandler, actionHandler}) => { 
  const [title, setTitle] = React.useState<string>('')
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  return (
    <Stack>
      <Input variant={'outline'} onChange={onChangeHandler} placeholder={'Enter list title...'} bg='white' />
      <HStack>
        <Button variant='green' onClick={()=>{
          actionHandler(title);
          cancelHandler(); 
        }} >add</Button>
        <Button variant='ghost' onClick={cancelHandler} >cancel</Button>
      </HStack>
    </Stack>
  )
}

export default AddCard;

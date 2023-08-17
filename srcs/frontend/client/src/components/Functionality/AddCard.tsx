import React, {useState } from "react";
import { Box, Button,  Wrap, HStack } from "@chakra-ui/react";
import { ControlledForm } from "../Forms/controlledForm";
interface AddCardProps {
  cancelHandler: () => void;
  actionHandler:(title:string)=>void,
  placeholder?: string;
}


const AddCard:React.FC<AddCardProps> = ({cancelHandler, actionHandler, placeholder}) => {
  const [title, setTitle] = useState<string>('')
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleOnsubmit = ()=>{
    actionHandler(title);
  }
  
  return (
    <Box w='260px' bg="white" borderWidth="1px" borderRadius="xl" p={5} shadow="md" py={4}>
      <Wrap spacing={8}>
        <ControlledForm placeholder={placeholder} action={handleOnsubmit} onClose={cancelHandler} handleOnchange={onChangeHandler}  value={title} />
        <HStack>
        <Button variant='green' onClick={()=>{
          handleOnsubmit ()
          cancelHandler ()
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


export default AddCard;

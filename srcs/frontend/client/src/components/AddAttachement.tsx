import React, {useRef} from "react";
import { useContext } from "react";
import { Card, popOverContext } from "../context/ContextScheme";
import { HStack, Heading, Input, Stack, Text, Button , FormLabel, Avatar, } from "@chakra-ui/react";
import { useAttachementsUploader } from "../hooks/useAttachementsUploader";
interface Props {
  card?: Card;
}
export const AddAttachement: React.FC<Props> = ({ card }) => {
    const { onClose } = useContext(popOverContext);
    const fileInputRef = useRef<HTMLLabelElement | null>(null);
    const {handleSubmit, SendFormData, register, fileData} = useAttachementsUploader (card?.id!);   

    
    
  return (
    <Stack spacing={5} minW={'250px'} alignItems={'flex-start'} justifyContent={'center'}>
      <Stack spacing={3}>
        <Heading>Attachements</Heading>
        <Text>Attach a file from your computer</Text>
      </Stack>
      <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit(SendFormData)}>
      <FormLabel visibility="hidden" ref={fileInputRef} htmlFor="attachement"></FormLabel>
        <Input type="input" variant='default' placeholder="attachement title" {...register("title")}/>
        <Input type="file" visibility={'hidden'} id='attachement'  {...register("attachement")}/>
        <Button variant={"ghost"} onClick={() => fileInputRef.current?.click()}>
          chose file
        </Button>
      <HStack spacing={4}>
        <Button type='submit' variant="primary" onClick={()=>{
            onClose! ()
        }}>add</Button>
        <Button variant="ghost" onClick={()=>{
            onClose! ()
        }}>cancel</Button>
      </HStack>
      </form>

      {fileData && fileData.length && <Avatar src={fileData} name={fileData.split ('.')[1]} boxSize={200} borderRadius={8} />}

    </Stack>
  );
};

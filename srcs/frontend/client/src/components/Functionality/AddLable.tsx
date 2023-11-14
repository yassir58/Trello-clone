import React, { useState, useContext } from "react";

import {
  Button,
  Heading,
  Stack,
  chakra,
  HStack,
} from "@chakra-ui/react";
import { Card , Label as LabelType, popOverContext} from "../../context/ContextScheme";
import { ControlledForm } from "../Forms/controlledForm";
// import {RemoveLabel} from "./RemoveLabel";


interface AddLableProps {
  card?: Card;
  action?: (label: LabelType) => void;
}


export const AddLable: React.FC<AddLableProps> = ({
  // card,
  action,
}) => {
  const [labels, setLabels] = useState<LabelType[]>([]);
  const [tag, setValue] = useState<string>("");
  const [color, setColor] = useState<string>("gray");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

 

  const addLabel = () => {
    let temp = labels.slice();
    temp.push({tag, color});
    setLabels(temp);
    setValue("");
    action && action ({tag, color})
  };
  
  const colors = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "white",
    "black",
  ];

  const {onClose} = useContext (popOverContext)
  return (
      <Stack spacing={2} px={4} py={2} justifyContent="flex-start" alignItems='flex-start'  w='100%'>
        <Heading size="sm">Lable</Heading>
        <chakra.small color="#BDBDBD" fontSize="xs">
          Select a name and a color
        </chakra.small>
        <ControlledForm  placeholder="Label..." value={tag} action={addLabel} handleOnchange={onChange}/>
        <HStack flexWrap="wrap" justify="center" w="100%">
          {colors.map((color) => {
            return (
              <Button
                bg={`${color}.400`}
                borderRadius="lg"
                w="55px"
                h="35px"
                sx={{
                  _hover: {
                    opacity: 0.8,
                  },
                  _focus: {
                    outline: "1px solid #2A9AF3",
                    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
                  },
                }}
                onClick={() => setColor(color)}
              ></Button>
            );
          })}
        </HStack>
        
       <HStack  w='100%' border='1px' borderColor='red' justifyContent={'flext-start'}>
       <Button size="md" colorScheme={'blue'} mx="auto" onClick={()=>{
          addLabel ()
          onClose! ()
        }}>
          Add
        </Button>

        <Button variant='ghost' onClick={onClose}>cancel</Button>
       </HStack>
      </Stack>
  );
};

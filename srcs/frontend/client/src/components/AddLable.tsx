import React, { useState } from "react";


import {
  Button,
  Heading,
  Stack,
  chakra,
  Input,
  HStack,

} from "@chakra-ui/react";
import { CardInfo } from "./ui-elements/Media"
import { Label } from "./ui-elements/Buttons";
import {MdLabel} from "react-icons/md";

interface LableObject {
    value: string;
    color: string;
}
export const AddLable: React.FC = () => {
  const [labels, setLabels] = useState<LableObject[]>([]);
  const [value, setValue] = useState<string>("");
  const [color, setColor] = useState<string>("gray");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const addLabel = () => 
  {
    let temp = labels.slice();
    temp.push({value,color});
    setLabels(temp);
    setValue("");   
  }
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
    "brown" ,
    "indigo",

  ];
  return (
    <div>
      <Stack spacing={2} px={4} py={2} justify="flex-start">
        <Heading size="sm">Lable</Heading>
        <chakra.small color="#BDBDBD" fontSize="xs">
          Select a name and a color
        </chakra.small>
        <Input
          placeholder="Label..."
          boxShadow="md"
          borderRadius="lg"
          w="98%"
          fontSize="sm"
          value={value}
          onChange={onChange}
        />
        <HStack flexWrap='wrap' justify='center'>
          {colors.map((color) => {
            return (
              <Button
                colorScheme={color}
                borderRadius="lg"
                w="45px"
                h="30px"
                sx={{
                    _hover: {
                      opacity: 0.8,
                    },
                    _focus: {
                      outline: "none",
                      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
                    },
                  }}
                onClick={()=>setColor(color)}
              ></Button>
            );
          })}
        </HStack>
        <CardInfo
          value="Available"
          icon={
            <MdLabel/>
          }
        />
        <HStack spacing={2} px={2} py={2} flexWrap='wrap'>
            {
                labels.map((label)=>{
                  return <Label color={label.color}>{label.value}</Label>
                })
            }
        </HStack>
        <Button size="md" fontSize="md" fontWeight='normal' mx="auto" onClick={addLabel} colorScheme="blue">
          Add
        </Button>
      </Stack>
    </div>
  );
};

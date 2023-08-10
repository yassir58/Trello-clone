import React, { useState } from "react";

import {
  Button,
  Heading,
  Stack,
  chakra,
  Input,
  HStack,
} from "@chakra-ui/react";
import { CardInfo } from "../ui-elements/Media";
import { Label } from "../ui-elements/Label";
import { MdLabel } from "react-icons/md";
import { Card , Label as LabelType} from "../../context/ContextScheme";
// import {RemoveLabel} from "./RemoveLabel";


interface AddLableProps {
  card?: Card;
  action?: (label: LabelType) => void;
}

// const createNewLabel = (
//   cards: Card[],
//   setCards: React.Dispatch<React.SetStateAction<Card[]>>,
//   cardId: string,
//   value: string,
//   color: string
// ) => {
//   let temp = cards.slice();
//   let index = cards.findIndex ((card) => card.id == cardId);
//   let labels = temp[index].labels;
//   labels?.push({ value, color });
//   temp[index].labels = labels;
//   setCards(temp);
// };

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
  const removeLabel = (index: number) => {
    // let temp = labels.slice();
    // temp.splice(index, 1);
    // setLabels(temp);
    console.log (index)
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
    "white",
    "black",
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
          w="98%"
          variant="outline"
          value={tag}
          onChange={onChange}
        />
        <HStack flexWrap="wrap" justify="center" w="100%">
          {colors.map((color) => {
            return (
              <Button
                bg={`${color}.400`}
                borderRadius="lg"
                w="50px"
                h="30px"
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
        <CardInfo value="Available" icon={<MdLabel />} />
        <HStack spacing={2} px={2} py={2} flexWrap="wrap">
          {labels.map((label, index) => {
            return <Label  action={()=>{
              // RemoveLabel(cards, setCards, card!.id || '', index)
              removeLabel(index)
            }}  color={label.color}>{label.tag}</Label>;
          })}
        </HStack>
        <Button size="md" variant="primary" mx="auto" onClick={()=>{
          addLabel ()
          // createNewLabel (cards!, setCards!, card!.id || '', value, color)
        }}>
          Add
        </Button>
      </Stack>
    </div>
  );
};

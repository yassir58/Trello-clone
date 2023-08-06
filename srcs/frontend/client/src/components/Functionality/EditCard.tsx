import React from "react";
import { Stack, Text, HStack, Button, chakra } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { CardInfo } from "../ui-elements/Media";
import { EditCardCover } from "../ui-elements/EditCardCover";
import { FaPen, FaTrash } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { MyEditableTextarea } from "../Menu";
import { MembersPopOver, LabelPopOver, CoverPopOver } from "../Popover";
import { Card } from "../../context/ContextScheme";
import { ModalCardProps } from "../ui-elements/Modal";
import { Label } from "../ui-elements/Label";
// import { RemoveLabel } from "./RemoveLabel";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
// import { AddCardTitle } from "./AddCardTitle";
// import { AddCardDescription } from "./AddCardDescription";
interface EditCardProps extends ModalCardProps {
  card: Card;
  onClose: () => void;
  mutation: any;
}

export const EditCard: React.FC<EditCardProps> = ({ card, onClose, mutation }) => {
  return (
    <div>
      <Stack spacing={4}>
        {card && (
          <>
            <CloseButton onClose={onClose} />
            {card.cover && <EditCardCover image={card.cover} />}
            <HStack justify="space-between" mx="auto" px={3} py={2} width="100%" alignItems="flex-start">
              <Stack w="70%">
                <Editable defaultValue={card.title ? card.title : "Add card title"}>
                  <EditablePreview fontSize="lg" />
                  <EditableInput
                    onChange={(e) => {
                      console.log(e);
                      // AddCardTitle(state?.cards, state?.setCards, card.id, e.target.value)
                    }}
                  />
                </Editable>
                <Text fontSize="xs" fontWeight="normal" color="#828282">
                  In list
                  <chakra.small px={1} color="black" fontWeight="bold">
                    In Progress
                  </chakra.small>
                </Text>
                <HStack spacing={4} pt={5} pb={3}>
                  <CardInfo icon={<MdDescription />} value="Description" />
                  <Button variant="outlineSecondary">
                    <HStack spacing={3}>
                      <FaPen />
                      <chakra.small>Edit</chakra.small>
                    </HStack>
                  </Button>
                </HStack>
                <MyEditableTextarea
                  defaultValue={card.description}
                  action={(value: string) => {
                    console.log(value);
                    // AddCardDescription(state?.cards, state?.setCards, card.id, value)
                  }}
                />
                <HStack spacing={2} px={4} py={2}>
                  {card.labels &&
                    card.labels.map((tag) => {
                      return (
                        <Label
                          color={tag.color}
                          action={
                            () => {}
                            //   RemoveLabel(
                            //     state?.cards,
                            //     state?.setCards,
                            //     card?.id,
                            //     index
                            //   )
                          }
                        >
                          {tag.value}
                        </Label>
                      );
                    })}
                </HStack>
              </Stack>
              <Stack w="25%" spacing={3} py={4}>
                <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
                <MembersPopOver />
                <LabelPopOver card={card} />
                <CoverPopOver card={card} />
                <Button
                  variant="outlineRed"
                  onClick={() => {
                    mutation.mutate(card);
                    onClose();
                  }}
                >
                  <HStack spacing={3}>
                    <FaTrash />
                    <Text fontSize={"sm"}> Delete Card </Text>
                  </HStack>
                </Button>
              </Stack>
            </HStack>
          </>
        )}
      </Stack>
    </div>
  );
};

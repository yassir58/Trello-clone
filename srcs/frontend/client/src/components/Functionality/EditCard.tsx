import React, {useContext} from "react";
import { Stack, Text, HStack, Button, chakra } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { CardInfo } from "../ui-elements/Media";
import { EditCardCover } from "../ui-elements/EditCardCover";
import {  FaTrash } from "react-icons/fa6";
import { BiSolidUserCircle } from "react-icons/bi";
import { MyEditableTextarea, EditableTitle } from "../Menu";
import {LabelPopOver, CoverPopOver} from "../Popover";
import { Card} from "../../context/ContextScheme";
import { ModalCardProps } from "../ui-elements/Modal";
import { LabelsContext } from "../../providers/LabelsProvider";
import { LabelList } from "../Lists/LabelList";
import { CheckLists } from "../CheckLists";
import CommentSection from "../CommentSection";
import { CommentList } from "../CommentList";
import { AttachementsPopOver } from "../Popover";
import { AttachementsList } from "../AttachementList";
interface EditCardProps extends ModalCardProps {
  card: Card;
  onClose: () => void;
  deleteMutation: any;
  updateMutation:any;
}

export const EditCard: React.FC<EditCardProps> = ({ card, onClose, deleteMutation, updateMutation }) => {
 
  const {labels, createLabel, deleteLabel} = useContext (LabelsContext)
  
 
  return (
    <div>
      <Stack spacing={4}>
        {card && (
          <>
            <CloseButton onClose={onClose} />
            {card.coverImage && <EditCardCover image={card.coverImage} />}
            <HStack justify="space-between" flexWrap={'wrap'} mx="auto" w={'100%'} px={3} py={2} alignItems="flex-start">
              <Stack w={'400px'}>
                <EditableTitle defaultValue={card.title} action={
                  
                  (value:string)=>{
                    const newCard = {title:value}
                    updateMutation.mutate ({id:card.id, card:newCard})
                  }
                }/>
                <Text fontSize="xs" fontWeight="normal" color="#828282">
                  In list
                  <chakra.small px={1} color="black" fontWeight="bold">
                    In Progress
                  </chakra.small>
                </Text>
               
                <MyEditableTextarea
                  defaultValue={card.description}
                  action={(value: string) => {
                    const newCard = {description:value}
                    updateMutation.mutate ({id:card.id , card:newCard})
                  }}
                />
                <CheckLists card={card} />
                <AttachementsList card={card}/>
                <CommentSection card={card}/>
                <CommentList card={card}/>
                <LabelList labels={labels} deleteLabel={deleteLabel} />
              </Stack>
              <Stack spacing={3} py={4}>
                <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
                <LabelPopOver card={card} addLabelAction={createLabel} />
                <AttachementsPopOver card={card}/>
                <CoverPopOver card={card} action={(value:string)=>{
                  const newCard = {coverImage:value}
                  updateMutation.mutate ({id:card.id, card:newCard})
                }}/>
                <Button
                  variant="outlineRed"
                  onClick={() => {
                    deleteMutation.mutate(card);
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

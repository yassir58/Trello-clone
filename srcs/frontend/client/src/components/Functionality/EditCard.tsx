import React from "react";
import { Stack, Text, HStack, Button, chakra } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { CardInfo } from "../ui-elements/Media";
import { EditCardCover } from "../ui-elements/EditCardCover";
import {  FaTrash } from "react-icons/fa6";
import { BiSolidUserCircle } from "react-icons/bi";
import { MyEditableTextarea, EditableTitle } from "../Menu";
import { MembersPopOver, LabelPopOver, CoverPopOver } from "../Popover";
import { Card, Label as LabelType } from "../../context/ContextScheme";
import { ModalCardProps } from "../ui-elements/Modal";
import { useMutation } from "react-query";
import apiClient from "../../services/apiClient";
import { Label } from "../ui-elements/Label";
import { QueryClient } from "react-query";
interface EditCardProps extends ModalCardProps {
  card: Card;
  onClose: () => void;
  deleteMutation: any;
  updateMutation:any;
}

export const EditCard: React.FC<EditCardProps> = ({ card, onClose, deleteMutation, updateMutation }) => {
 
  const queryClient = new QueryClient ()
  const labelsClient = (id:string)=> new apiClient (`/cards/${id}/labels`)

  // const  labelsQuery = useQuery ({
  //   queryKey:['labels', card.id],
  //   queryFn:()=> labelsClient(card.id).getData().then (res=>res.data),
  //   onSuccess:(data)=>{
  //     console.log (`labels : ${data}`)
  //   }
  // })
  const labelsMutation = useMutation ({
    mutationFn:(label:LabelType)=> labelsClient(card?.id || '').postData(label).then (res=>res.data),
    onSuccess:(data)=>{
      console.log (`label added : ${data}`)
      queryClient.invalidateQueries (['labels', card.id])
    }
  })
  return (
    <div>
      <Stack spacing={4}>
        {card && (
          <>
            <CloseButton onClose={onClose} />
            {card.coverImage && <EditCardCover image={card.coverImage} />}
            <HStack justify="space-between" mx="auto" px={3} py={2} width="100%" alignItems="flex-start">
              <Stack w="70%">
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
                    console.log(`value: ${value}`);
                    const newCard = {description:value}
                    updateMutation.mutate ({id:card.id , card:newCard})
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
                <LabelPopOver card={card} addLabelAction={(label:LabelType)=>{
                  labelsMutation.mutate (label)
                }} />
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

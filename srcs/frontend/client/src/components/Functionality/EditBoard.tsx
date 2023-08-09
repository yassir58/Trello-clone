import React from "react";
import { Button, Stack, HStack, Text, Heading} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { MembersPopOver, CoverPopOver } from "../Popover";
import { CardInfo, ProfileCard } from "../ui-elements/Media";
import { BiSolidUserCircle } from "react-icons/bi";
import { MyEditableTextarea, EditableTitle } from "../Menu";
import { FaTrash } from "react-icons/fa6";
import { EditBoardWrapper, ModalBoardProps } from "../ui-elements/Modal";
import { CloseButton } from "./CloseButton";
import { EditCardCover } from "../ui-elements/EditCardCover";

interface EditBoardProps extends ModalBoardProps {}
export const EditBoard: React.FC<EditBoardProps> = ({Board, updateMutation, deleteMutation}) => {
  return (
    <>
      <EditBoardWrapper variant="ghost" icon={<FaPen />} Board={Board} updateMutation={updateMutation} deleteMutation={deleteMutation} />
    </>
  );
};

interface EditBoardCpProps extends ModalBoardProps {
  onClose: () => void;
}

export const EditBoardComponent: React.FC<EditBoardCpProps> = ({ onClose, Board, updateMutation, deleteMutation}) => {
  return (
    <Stack>
      <EditCardCover image={Board?.coverImage || ''} />
      <HStack justifyContent={"space-between"} width="100%" alignItems={"flex-start"}>
        <CloseButton onClose={onClose} />
        <Stack width="70%">
          <Heading fontSize={"md"} py={3}>
            
          </Heading>
         <EditableTitle fs='lg' defaultValue={Board?.title|| ''} action={(value:string)=>{
          const newBoard = {title:value}
          updateMutation.mutate (newBoard)
         }
         }/>
          <Stack spacing={3} my="12px">
            <CardInfo value="Made by" icon={<BiSolidUserCircle />} />
            <ProfileCard
              profile={{
                name: "jan doe",
                image: "https://bit.ly/dan-abramov",
                joined: "45 , october 2023",
              }}
            />
          </Stack>
          
          <MyEditableTextarea defaultValue={Board?.description || ''} action={(value:string)=>{
            const newBoard = {description: value}
            updateMutation.mutate(newBoard)
          }} />
        </Stack>
        <Stack width="25%" py={5}>
          <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
          <MembersPopOver />
          <CoverPopOver action={(photo:string)=>{
              const newBoard = {coverImage: photo}
              updateMutation.mutate (newBoard)
          }} />
          <Button variant="outlineRed" onClick={()=>{
            deleteMutation.mutate ();
          }}>
            <HStack spacing={3}>
              <FaTrash />
              <Text fontSize={"sm"}> Delete Board </Text>
            </HStack>
          </Button>
        </Stack>
      </HStack>
    </Stack>
  );
};

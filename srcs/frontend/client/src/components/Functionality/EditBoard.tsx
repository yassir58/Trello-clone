import React, { useState } from "react";
import { Button, Stack, HStack, Text, Heading } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { CoverPopOver } from "../Popover";
import { CardInfo, ProfileCard } from "../ui-elements/Media";
import { BiSolidUserCircle } from "react-icons/bi";
import { MyEditableTextarea, EditableTitle } from "../Menu";
import { FaTrash, FaUsers } from "react-icons/fa6";
import { EditBoardWrapper, ModalBoardProps } from "../ui-elements/Modal";
import { CloseButton } from "./CloseButton";
import { EditCardCover } from "../ui-elements/EditCardCover";
import { TeamMemberCard } from "../Menu";
import { Board, User } from "../../context/ContextScheme";

interface EditBoardProps extends ModalBoardProps {}
export const EditBoard: React.FC<EditBoardProps> = ({ Board, updateMutation, deleteMutation }) => {
  return (
    <>
      <EditBoardWrapper
        variant="secondary"
        icon={<FaPen />}
        Board={Board}
        updateMutation={updateMutation}
        deleteMutation={deleteMutation}
        value="edit board"
      />
    </>
  );
};

interface EditBoardCpProps extends ModalBoardProps {
  onClose: () => void;
}

export const EditBoardComponent: React.FC<EditBoardCpProps> = ({ onClose, Board, updateMutation, deleteMutation }) => {
  return (
    <Stack>
      <EditCardCover image={Board?.coverImage || ""} />
      <HStack justifyContent={"space-between"} flexWrap={'wrap'}   alignItems={"flex-start"}>
        <CloseButton onClose={onClose} />
        <Stack w={'400px'} >
          <Heading fontSize={"md"} py={3}></Heading>
          <EditableTitle
            fs="lg"
            defaultValue={Board?.title || ""}
            action={(value: string) => {
              const newBoard = { title: value };
              updateMutation.mutate(newBoard);
            }}
          />
          <Stack spacing={3} my="12px">
            <CardInfo value="Made by" icon={<BiSolidUserCircle />} />
            <ProfileCard profile={Board?.author || {}} />
          </Stack>

          <MyEditableTextarea
            defaultValue={Board?.description || ""}
            action={(value: string) => {
              const newBoard = { description: value };
              updateMutation.mutate(newBoard);
            }}
          />
        </Stack>
        <Stack py={5}>
          <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
          {(Board?.visibility == false) && <MembersToggler Board={Board} />}
          <CoverPopOver
            action={(photo: string) => {
              const newBoard = { coverImage: photo };
              updateMutation.mutate(newBoard);
            }}
          />
          <Button
            variant="outlineRed"
            onClick={() => {
              deleteMutation.mutate();
            }}
          >
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

interface MembersToggler {
  Board: Board;
}

const MembersToggler: React.FC<MembersToggler> = ({ Board }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Stack spacing={3}>
      <Button variant="secondary" onClick={() => setShow(!show)}>
        <HStack spacing={2}>
          <BiSolidUserCircle />
          <Text fontSize="sm">Members</Text>
        </HStack>
      </Button>
       {show && <CardInfo icon={<FaUsers />} value="Members" />}
      {show &&
        Board?.users &&
        Board?.users.map((member: User) => {
          return <TeamMemberCard profile={member} />;
        })}
    </Stack>
  );
};

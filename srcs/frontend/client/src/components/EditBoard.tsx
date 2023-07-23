import React from "react";
import {
  Button,
  useDisclosure,
  Stack,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { EditCardCover, ModalComponent, CloseButton, MembersPopOver , CoverPopOver} from "./Popover";
import { CardInfo, ProfileCard } from "./ui-elements/Media";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { MyEditableTextarea } from "./Menu";
import { FaTrash } from "react-icons/fa6";

export const EditBoard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={"ghost"} onClick={onOpen}>
        <FaPen />
      </Button>
      <ModalComponent
        style={{ size: "2xl" }}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <EditBoardComponent onClose={onClose} />
      </ModalComponent>
    </>
  );
};

interface EditBoardCpProps {
  onClose: () => void;
}

export const EditBoardComponent: React.FC<EditBoardCpProps> = ({ onClose }) => {
  return (
    <Stack>
      <EditCardCover image="https://source.unsplash.com/random?sig=98" />
      <HStack justifyContent={"space-between"} width="100%" alignItems={'flex-start'}>
        <CloseButton onClose={onClose} />
        <Stack width="70%">
          <Heading fontSize={'md'} py={3}>Board title</Heading>
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
          <HStack>
            <CardInfo value="Description" icon={<MdDescription />} />
            <Button variant="outlineSecondary">
              <HStack spacing={2}>
                <FaPen /> <Text fontSize="sm">Edit</Text>
              </HStack>
            </Button>
          </HStack>
          <MyEditableTextarea />
        </Stack>
        <Stack width="25%" py={5}>
          <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
          <MembersPopOver />
          <CoverPopOver />
          <Button variant="outlineRed">
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

import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  HStack,
  chakra,
  Stack,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Heading,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Divider,
  PlacementWithLogical,
  // Lorem
} from "@chakra-ui/react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { FaUnlockKeyhole, FaImage, FaXmark } from "react-icons/fa6";
import { Card } from "../context/ContextScheme";
import { CardInfo } from "./ui-elements/Media";
import { FaUserGroup } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { AddLable } from "./AddLable";
import InviteToBoard from "./InviteToBoard";
import { MdDescription } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import { ChangeCover } from "./ChangeCover";
interface PopOverProps {
  // trigger:any;
  children: React.ReactNode;
  button: React.ReactNode;
  size?: string;
  variant?: string;
  header?: string;
  placement?: PlacementWithLogical | undefined;
}

interface DrawerCpProps {
  children: React.ReactNode;
  header: string;
  buttonValue: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  size = "xs",
  button,
  header,
  placement = "bottom",
}) => {
  const PopOverHeader = () => {
    return (
      <div>
        <PopoverHeader fontWeight="semibold">{header}</PopoverHeader>
        <PopoverCloseButton />
      </div>
    );
  };
  return (
    <div>
      <Popover placement={placement}>
        <PopoverTrigger>{button}</PopoverTrigger>
        <PopoverContent width={size} mx="10px">
          {header && <PopOverHeader />}
          <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

interface ModalComponentProps {
  children: React.ReactNode;
  buttonValue?: React.ReactNode;
  style: {
    size: string;
    colorScheme?: string;
    buttonSize?: string;
  };
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  style,
  children,
  buttonValue,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      {onOpen && buttonValue && (
        <Button
          onClick={onOpen}
          colorScheme={style.colorScheme}
          size={style.buttonSize}
        >
          {buttonValue}
        </Button>
      )}

      {isOpen && onClose && (
        <Modal isOpen={isOpen} onClose={onClose} size={style.size}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
import { MyEditableTextarea } from "./Menu";
import { FaTrash } from "react-icons/fa6";
interface newBoardProps {
  action: any;
  onClose: () => void;
}

export const NewBoard: React.FC<newBoardProps> = ({
  action,
  onClose,
}) => {
  const [title, setTitle] = useState<string>("");

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = () => {
    action(title);
  };

  return (
    <Stack spacing={4} justify="center">
      <CloseButton onClose={onClose} />
      <EditCardCover
        image={`https://source.unsplash.com/random?sig=${Math.random() + 1}`}
      />

      <chakra.input
        placeholder="Add board title"
        borderRadius="lg"
        fontSize="sm"
        boxShadow="md"
        mx="auto"
        border="1px solid gray.300 "
        px="8px"
        py="12px"
        w="96%"
        onChange={handleOnchange}
      />
      <HStack spacing={4} justifyContent="center">
        <Button variant="secondary">
          <HStack spacing={3}>
            <chakra.span fontSize="lg">
              <FaImage />
            </chakra.span>
            <chakra.small fontSize="md" fontWeight="normal">
              Cover
            </chakra.small>
          </HStack>
        </Button>

        <Button variant="secondary">
          <HStack spacing={3}>
            <chakra.span fontSize="lg">
              <FaUnlockKeyhole />
            </chakra.span>
            <chakra.small fontSize="md" fontWeight="normal">
              Private
            </chakra.small>
          </HStack>
        </Button>
      </HStack>
      <HStack spacing={2} justifyContent="flex-end">
        <Button variant="ghostSecondary" onClick={onClose}>
          cancel
        </Button>
        <Button
          colorScheme="blue"
          mr={3}
          onClick={() => {
            handleOnSubmit();
            onClose();
          }}
          fontSize="md"
          fontWeight="normal"
        >
          <HStack spacing={1}>
            <chakra.span fontSize="xl">
              <BiPlus />
            </chakra.span>
            <chakra.small fontSize="md">create</chakra.small>
          </HStack>
        </Button>
      </HStack>
    </Stack>
  );
};

interface EditCoverProps {
  image: string;
}

export const EditCardCover: React.FC<EditCoverProps> = ({ image }) => {
  return (
    <Box position="relative">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        width="100%"
        height={["130px", "130px", "130px", "130px"]}
        mx="auto"
        mt={3}
      >
        <Image
          src={image}
          alt="Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};

interface EditCardProps {
  card: Card;

  onClose: () => void;
}

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <Button
      position="absolute"
      top="0"
      right="0"
      mr={3}
      mt={3}
      variant={"primary"}
      zIndex="2"
      onClick={onClose}
    >
      <FaXmark />
    </Button>
  );
};

export const EditCardComponent: React.FC<EditCardProps> = ({
  card,
  onClose,
}) => {
  return (
    <div>
      <Stack spacing={4}>
        {card.cover && (
          <>
            <CloseButton onClose={onClose} />
            <EditCardCover image={card.cover} />
            <HStack
              justify="space-between"
              mx="auto"
              px={3}
              py={2}
              width="100%"
              alignItems="flex-start"
            >
              <Stack w="70%">
                <Heading fontSize="lg">
                  {card.title ? card.title : "Add card title"}
                </Heading>
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
                <MyEditableTextarea />
              </Stack>
              <Stack w="25%" spacing={3} py={4}>
                <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
                <MembersPopOver />
                <LabelPopOver />
                <CoverPopOver />
                <Button variant="outlineRed">
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

export const DrawerCp: React.FC<DrawerCpProps> = ({
  children,
  header,
  buttonValue,
  isOpen,
  onOpen,
  onClose,
}) => {
  // const btnRef = React.useRef()

  return (
    <div>
      <Button variant="secondary" onClick={onOpen}>
        {buttonValue}
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <Divider />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const MembersPopOver: React.FC = () => {
  return (
    <PopOver
      button={
        <Button variant="secondary" width="100%">
          <HStack spacing={3}>
            <FaUserGroup />
            <Text fontSize="sm">Members</Text>
          </HStack>
        </Button>
      }
      size="2xs"
      placement="left"
    >
      <InviteToBoard />
    </PopOver>
  );
};

export const LabelPopOver: React.FC = () => {
  return (
    <PopOver
      button={
        <Button variant="secondary" width="100%">
          <HStack spacing={3}>
            <MdLabel />
            <Text fontSize="sm">Labels</Text>
          </HStack>
        </Button>
      }
      size="300px"
      placement="left"
    >
      <AddLable />
    </PopOver>
  );
};

export const CoverPopOver: React.FC = () => {
  return (
    <PopOver
      button={
        <Button variant="secondary" width="100%">
          <HStack spacing={3}>
            <FaImage />
            <Text fontSize="sm">Cover</Text>
          </HStack>
        </Button>
      }
      size="2xs"
      placement="left"
    >
      <ChangeCover />
    </PopOver>
  );
};

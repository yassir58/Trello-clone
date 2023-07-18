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
  // Lorem
} from "@chakra-ui/react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { FaUnlockKeyhole, FaImage, FaXmark } from "react-icons/fa6";
import { CardElementProps } from "./ui-elements/Media";
import { CardInfo } from "./ui-elements/Media";
import { FaUserGroup } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { AddLable } from "./AddLable";
import InviteToBoard from "./InviteToBoard";
import { MdDescription } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
interface PopOverProps {
  // trigger:any;
  children: React.ReactNode;
  icon?: any;
  size?: string;
  buttonTheme?: {
    colorScheme: string;
    size: string;
    color?: string;
    width?: string;
    variant?: string;
  };
  header?: string;
  value?: string;
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  icon,
  size = "xs",
  buttonTheme = {
    colorScheme: "blue",
    size: "sm",
    color: 'black',
    width: "",
    variant:''
  },
  header,
  value,

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
      <Popover>
        <PopoverTrigger>
          <Button
            colorScheme={buttonTheme.colorScheme}
            fontWeight="normal"
            fontSize="sm"
            size={buttonTheme.size}
            width={buttonTheme.width}
            color={buttonTheme.color}
            variant={buttonTheme.variant}
          >
            <HStack spacing={3}>
              {icon}
              {value && <chakra.small>{value}</chakra.small>}
            </HStack>
          </Button>
        </PopoverTrigger>
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
import { BoardProps } from "./AllBoards";
import { ChangeCover } from "./ChangeCover";
import { MyEditableTextarea } from "./Menu";
interface newBoardProps {
  action: any;
  state: BoardProps[];
  onClose: () => void;
}

export const NewBoard: React.FC<newBoardProps> = ({
  action,
  state,
  onClose,
}) => {
  const [title, setTitle] = useState<string>("");

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = () => {
    const temp: BoardProps[] = state.slice();
    const id = temp.length + 1;
    temp.push({
      id: id,
      title: title,
      image: `https://source.unsplash.com/random?sig=${id}`,
    });
    action(temp);
  };

  return (
    <Stack spacing={4} justify="center">
      <EditCardCover
        image={`https://source.unsplash.com/random?sig=${state.length + 1}`}
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
        <Button size="sm" px="30px" py="5" bg="#F2F2F2" color="#828282">
          <HStack spacing={3}>
            <chakra.span fontSize="lg">
              <FaImage />
            </chakra.span>
            <chakra.small fontSize="md" fontWeight="normal">
              Cover
            </chakra.small>
          </HStack>
        </Button>

        <Button size="sm" px="30px" py="5" bg="#F2F2F2" color="#828282">
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
        <Button
          variant="ghost"
          fontSize="md"
          mx="10px"
          color="gray.500"
          fontWeight="normal"
          onClick={onClose}
        >
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
      <RemoveCover />
    </Box>
  );
};

export const RemoveCover: React.FC = () => {
  return (
    <Button
      position="absolute"
      top="0"
      boxShadow="md"
      borderRadius="lg"
      right="-5px"
      colorScheme="blue"
      size="sm"
      fontSize="lg"
      zIndex="2"
    >
      <FaXmark size="lg" />
    </Button>
  );
};

interface EditCardProps {
  card: CardElementProps;
}

export const EditCardComponent: React.FC<EditCardProps> = ({ card }) => {
  return (
    <div>
      <Stack spacing={4} justify="center">
        {card.cardBanner && (
          <>
            <EditCardCover image={card.cardBanner} />
            <HStack justify="space-between" mx="auto" px={3} py={2} width='100%' >
              <Stack w='70%'>
                <Heading fontSize='lg'>{card.title ? card.title : "Add card title"}</Heading>
                <Text fontSize="xs" fontWeight="normal" color="#828282">
                  In list
                  <chakra.small px={1}  color="black" fontWeight="bold">
                    In Progress
                  </chakra.small>
                </Text>
                <HStack spacing={4} pt={5} pb={3} >
                  <CardInfo icon={<MdDescription />} value="Description" />
                  <Button
                    variant="outline"
                    size="sm"
                    colorScheme="gray"
                    borderRadius="lg"
                    border="1px solid #828282"
                    color='#828282'
                  >
                    <HStack spacing={3}>
                      <FaPen />
                      <chakra.small>Edit</chakra.small>
                    </HStack>
                  </Button>
                </HStack>
                <MyEditableTextarea />
              </Stack>
              <Stack w="25%" spacing={3}>
                <CardInfo icon={<BiSolidUserCircle />} value="Actions" />
                <PopOver
                  value={"Members"}
                  icon={<FaUserGroup />}
                  buttonTheme={{ colorScheme: "gray", width: "100%" , size:'lg' , color:"#828282"}}
                  size="2xs"
                >
                  <InviteToBoard />
                </PopOver>
                <PopOver
                  value={"Labels"}
                  icon={<MdLabel />}
                  buttonTheme={{ colorScheme: "gray", width: "100%" , size:'lg' , color:"#828282"}}
                  size="2xs"
                >
                  <AddLable />
                </PopOver>
                <PopOver
                  value={"Cover"}
                  icon={<FaImage />}
                  buttonTheme={{ colorScheme: "gray", width: "100%" , size:'lg' , color:"#828282"}}
                  size="2xs"
                >
                  <ChangeCover />
                </PopOver>
              </Stack>
            </HStack>
          </>
        )}
      </Stack>
    </div>
  );
};

import React from "react";
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
  useDisclosure,
  
  // Lorem
} from "@chakra-ui/react";

import { BiPlus } from "react-icons/bi";
import {FaUnlockKeyhole, FaImage} from "react-icons/fa6"
;

interface PopOverProps {
  // trigger:any;
  children: React.ReactNode;
  icon?: any;
  size?: string;
  buttonTheme?: {
    bg: string;
    color: string;
  };
  header?: string;
  value?: string;
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  icon,
  size = "xs",
  buttonTheme = {
    bg: "gray.100",
    color: "gray.500",
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
            bg={buttonTheme.bg}
            color={buttonTheme.color}
            fontSize="sm"
            size="sm"
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
  style: {
    size: string;
  };
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  style,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={style.size}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton /> */}
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

interface newBoardProps {}

export const NewBoard: React.FC<newBoardProps> = ({}) => {
  return (
    <Stack spacing={4} justify='center'>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
        width="96%"
        height={["130px", "130px", "130px", "130px"]}
        mx="auto"
      >
        <Image src="https://images.unsplash.com/photo-1688504660493-efb13268e740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image" objectFit="cover" />
        <Box>{/* Card content */}</Box>
      </Box>
      <chakra.input placeholder="Add board title" borderRadius='lg' fontSize='sm' boxShadow='md' mx='auto' border='1px solid gray.300 ' px='8px' py='12px' w='96%'/>
      <HStack spacing={4}  justifyContent='center'>

        <Button size='sm' px='30px' py='5'  bg='#F2F2F2' color='#828282'>
          <HStack spacing={3}>
            <chakra.span fontSize="lg"><FaImage/></chakra.span>
            <chakra.small fontSize='md' fontWeight='normal'>Cover</chakra.small>
          </HStack>
        </Button>

        <Button size='sm' px='30px' py='5'  bg='#F2F2F2' color='#828282'>
          <HStack spacing={3}>
            <chakra.span fontSize="lg" ><FaUnlockKeyhole/></chakra.span>
            <chakra.small fontSize='md' fontWeight='normal'>Private</chakra.small>
          </HStack>
        </Button>
      </HStack>
      <HStack spacing={2}  justifyContent='flex-end'>
        <Button
          variant="ghost"
          fontSize="md"
          mx="10px"
          color="gray.500"
          fontWeight="normal"
        >
          cancel
        </Button>
        <Button
          colorScheme="blue"
          mr={3}
          // onClick={onClose}
          fontSize="md"
          fontWeight="normal"
        >

          <HStack spacing={1}>
            <chakra.span fontSize="xl">
              <BiPlus />
            </chakra.span>
            <chakra.small fontSize='md' >create</chakra.small>
          </HStack>
        </Button>
      </HStack>
    </Stack>
  );
};

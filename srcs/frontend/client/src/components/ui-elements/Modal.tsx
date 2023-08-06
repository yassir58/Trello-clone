import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { CardCp, CardProps } from "../Card";
import { EditCard} from "../Functionality/EditCard";
import { NewBoard } from "../Functionality/NewBoard";
interface ModalComponentProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  size?: string;
}

export interface ModalCardProps extends CardProps {
    id?: number | undefined,
    mutation:any
}
interface ModalButtonProps {

    variant?:string
    value?:string
    icon?:React.ReactNode
}
export const ModalComponent: React.FC<ModalComponentProps> = ({
  children,
  isOpen,
  onClose,
  size
}) => {
  return (
    <>
      {isOpen && onClose && (
        <Modal size={size} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody >{children}</ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export const ModalCardWrapper: React.FC<ModalCardProps> = ({
  card,
  width,
  height,
  id,
mutation
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(`this is id ${id}}`)
  return (
    <>
      <ModalComponent isOpen={isOpen} onClose={onClose} size='xl'>
        <EditCard card={card} onClose={onClose} mutation={mutation}/>
       </ModalComponent>
      <CardCp onClick={onOpen} 
        card={card}
        width={width}
        height={height}
      />
    </>
  );
};

export const ModalButtonWrapper: React.FC<ModalButtonProps> = ({
    variant,
    value,
    icon
})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
return (
    <>
        <ModalComponent isOpen={isOpen} onClose={onClose} size='xs'>
            <NewBoard onClose={onClose} />
        </ModalComponent>
        <Button variant={variant} onClick={onOpen}>
            <HStack spacing={1}>
                {icon}
                <Text fontSize='sm'>{value}</Text>
            </HStack>
        </Button>
    </>
)
}


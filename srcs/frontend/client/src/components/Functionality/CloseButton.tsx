import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaXmark } from 'react-icons/fa6'


interface CloseButtonProps {
    onClose?: () => void;
    ref?: React.LegacyRef<HTMLButtonElement>;
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


  export const SmallCloseButton: React.FC<CloseButtonProps> = ({ onClose, ref }) => {
    return (
      <Button
        position="absolute"
        top="-10px"
        right="-10px"
        variant={"secondary"}
        zIndex="2"
        onClick={onClose}
        p = {1}
        borderRadius='full'
        ref={ref}
      >
        <FaXmark />
      </Button>
    );
  };
  
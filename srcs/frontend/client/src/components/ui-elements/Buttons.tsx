import { Button } from "@chakra-ui/react";
import React from "react";
import { HStack , Tag} from "@chakra-ui/react";


interface PrimaryButtonProps {
  children: React.ReactNode;
  size?: string;
}
interface SecondaryButtonProps {
  children: React.ReactNode;
  size?: string;
  onClickHandler?: () => void;
}
interface LightButtonProps {}
interface LargeButtonProps {
  children: React.ReactNode;
  onClickHandler?: () => void;
}
interface LabelProps {
    children: React.ReactNode;
    color: string;
    size?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children , size = 'sm'}) => {
  return (
    <div>
      <Button
        colorScheme="blue"
        color="white"
        size={size}
        mx="2px"
        rounded="md"
        fontSize="sm"
        outline="none"
      >
      <HStack spacing={4}>
        {children}
      </HStack>
      </Button>
    </div>
  );
};
export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children, size = 'sm', onClickHandler
}) => {
  return (
    
        <Button
          mx="2px"
          size={size}
          colorScheme="gray"
          border="0"
          outline="none"
          color="#828282"
          rounded="md"
          fontSize="sm"
          onClick={() => onClickHandler && onClickHandler()}
        >
      <HStack spacing={4}>
          {children}
      </HStack>
        </Button>
  );
};
export const LighButton: React.FC<LightButtonProps> = () => {
  return <div></div>;
};
export const LargeButton: React.FC<LargeButtonProps> = ({ children, onClickHandler }) => {
  return (

        <Button
          position="relative"
          width='260px'
          bg="blue.100"
          color="blue.500"
          rounded="xl"
          py='4px'
          _hover={{ bg: "blue.200" }}
          onClick={() => onClickHandler && onClickHandler()}
        >
      <HStack  display={'flex'} justify='space-between' width='98%'>
          {children}
      </HStack>
        </Button>
  );
};


export const Label: React.FC<LabelProps> = ({color, children , size ='sm'}) => {
    return (
        <Tag
        bg={`${color}.100`}
        color={`${color}.600`}
        mx="2px"
        px={4}
        py={1}
        size={size}
        rounded="xl"
        fontSize="xs"
        outline="none"
      >
        {children}
      </Tag>
    )
}
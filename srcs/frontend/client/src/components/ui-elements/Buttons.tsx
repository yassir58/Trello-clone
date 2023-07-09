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
  size?: string;
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
        bg="blue.500"
        color="white"
        size={size}
        mx="2px"
        rounded="md"
        fontSize="xs"
        _hover={{ bg: "blue.600" }}
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
    <div>
        <Button
          mx="2px"
          size={size}
          bg="gray.100"
          border="0"
          outline="none"
          color="gray.500"
          rounded="md"
          _hover={{ bg: "gray.200" }}
          fontSize="sm"
          onClick={() => onClickHandler && onClickHandler()}
        >
      <HStack spacing={4}>
          {children}
      </HStack>
        </Button>
    </div>
  );
};
export const LighButton: React.FC<LightButtonProps> = () => {
  return <div></div>;
};
export const LargeButton: React.FC<LargeButtonProps> = ({ children, size ='xs' }) => {
  return (
    <div>
        <Button
          position="relative"
          width={size}
          bg="blue.100"
          color="blue.500"
          rounded="md"
          py='4px'
          _hover={{ bg: "blue.200" }}
        >
      <HStack  display={'flex'} justify='space-between' width='98%'>
          {children}
      </HStack>
        </Button>
    </div>
  );
};


export const Label: React.FC<LabelProps> = ({color, children , size ='sm'}) => {
    return (
        <Tag
        bg={`${color}.100`}
        color={`${color}.600`}
        mx="2px"
        px="8px"
        size={size}
        rounded="xl"
        fontSize="xs"
        outline="none"
      >
        {children}
      </Tag>
    )
}
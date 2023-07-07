import { Button } from "@chakra-ui/react";
import React from "react";
import { HStack , Tag} from "@chakra-ui/react";


interface PrimaryButtonProps {
  children: React.ReactNode;
  small?: boolean;
}
interface SecondaryButtonProps {
  children: React.ReactNode;
}
interface LightButtonProps {}
interface LargeButtonProps {
  children: React.ReactNode;
}
interface LabelProps {
    children: React.ReactNode;
    color: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children , small}) => {
  return (
    <div>
      <Button
        bg="blue.500"
        color="white"
        h={small ? '4vh' : '5vh'}
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
  children,
}) => {
  return (
    <div>
        <Button
          h="5vh"
          mx="2px"
          bg="gray.100"
          border="0"
          outline="none"
          color="gray.500"
          rounded="md"
          _hover={{ bg: "gray.200" }}
          fontSize="sm"
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
export const LargeButton: React.FC<LargeButtonProps> = ({ children }) => {
  return (
    <div>
        <Button
          w="19vw"
          bg="blue.100"
          color="blue.500"
          rounded="md"
          p="2px"
          h="5vh"
          _hover={{ bg: "blue.200" }}
        >
      <HStack  spacing='6vw'>
          {children}
      </HStack>
        </Button>
    </div>
  );
};


export const Label: React.FC<LabelProps> = ({color, children }) => {
    return (
        <Tag
        bg={`${color}.100`}
        color={`${color}.600`}
        h="4vh"
        mx="2px"
        rounded="full"
        fontSize="xs"
        outline="none"
      >
        {children}
      </Tag>
    )
}
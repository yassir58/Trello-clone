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
} from "@chakra-ui/react";


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
  size = 'xs',
  buttonTheme = {
    bg: "gray.100",
    color: "gray.500",
  },
  header,
  value
}) => {
  const PopOverHeader = () => {
    return (<div>
      <PopoverHeader fontWeight="semibold">
      {header}
      </PopoverHeader>
    <PopoverCloseButton />
    </div>)
  }
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button bg={buttonTheme.bg} color={buttonTheme.color} fontSize="sm" size="sm">
            <HStack spacing={3}>
              {icon}
              {value && <chakra.small>{value}</chakra.small> }
            </HStack>
          </Button>
        </PopoverTrigger>
          <PopoverContent width={size} mx='10px'>
            {header &&  <PopOverHeader/>}
            <PopoverBody>{children}</PopoverBody>
          </PopoverContent>
      </Popover>
    </div>
  );
};

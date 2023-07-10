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
  // Button,
  //   PopoverAnchor,
} from "@chakra-ui/react";
// import { PrimaryButton } from "./ui-elements/Buttons";
// import { SecondaryButton } from "./ui-elements/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PopOverProps {
  // trigger:any;
    children: React.ReactNode;
    icon?: any;
    value?: string;
    size?: string;
    buttonTheme?: {
        bg: string;
        color: string;
    };
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  icon,
  value,
  size,
  buttonTheme = {
    bg: "gray.100",
    color: "gray.500",
  },
}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button bg={buttonTheme.bg} color={buttonTheme.color} fontSize="sm" size="sm">
            <HStack spacing={3}>
              <FontAwesomeIcon icon={icon} />
              {value?<chakra.small>{value}</chakra.small>:null}
            </HStack>
          </Button>
        </PopoverTrigger>
          <PopoverContent width={size} mx='10px'>
            <PopoverHeader fontWeight="semibold">
              Popover placement
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>{children}</PopoverBody>
          </PopoverContent>
      </Popover>
    </div>
  );
};

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  Button,
  HStack,
  PlacementWithLogical,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext }  from "react";
import { popOverContext } from "../../context/ContextScheme";

interface PopOverProps {
  children: React.ReactNode;
  triggerValue?: React.ReactNode;
  triggerVariant?: string;
  placement?: PlacementWithLogical | undefined;
  size?: string;
  header?: string;
}

interface PopOverWrapperProps extends PopOverProps {
  icon?: React.ReactNode | undefined;
  value?: string;
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  size = "xs",
  triggerValue,
  triggerVariant,
  header,
  placement = "bottom",
}) => {

  const {isOpen, onOpen} = useContext (popOverContext)
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
      <Popover placement={placement} isOpen={isOpen}>
        <PopoverTrigger>
          <Button onClick={onOpen} variant={triggerVariant}>{triggerValue}</Button>
        </PopoverTrigger>
        <PopoverContent width={size} mx="10px">
          {header && <PopOverHeader />}
          <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const PopOverWrapper: React.FC<PopOverWrapperProps> = ({
  children,
  size = "xs",
  triggerVariant,
  header,
  placement = "bottom",
  icon,
  value,
}) => {
  const {isOpen, onClose, onOpen} = useDisclosure ();
  const trigger = () => {
    return (
      <HStack spacing={1}>
        {icon} <Text fontSize="sm">{value}</Text>
      </HStack>
    );
  };
  return (
    <popOverContext.Provider value={{isOpen, onClose, onOpen}}>
<PopOver
      size={size}
      placement={placement}
      header={header}
      triggerValue={trigger()}
      triggerVariant={triggerVariant}
    >
      {children}
    </PopOver>
    </popOverContext.Provider>
  );
};

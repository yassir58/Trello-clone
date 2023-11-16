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
  closable?:boolean
}

interface PopOverWrapperProps extends PopOverProps {
  icon?: React.ReactNode | undefined;
  value?: string;
  closable?:boolean
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  size = "xs",
  triggerValue,
  triggerVariant,
  header,
  closable,
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

  const CloseAblePopover = ()=>{
    return (<Popover placement={placement} isOpen={isOpen}>
      <PopoverTrigger>
        <Button onClick={onOpen} variant={triggerVariant}>{triggerValue}</Button>
      </PopoverTrigger>
      <PopoverContent width={size} mx="10px">
        {header && <PopOverHeader />}
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>)
  }

  const UncloseAblePopover = ()=>{
    return (<Popover placement={placement}>
      <PopoverTrigger>
        <Button onClick={onOpen} variant={triggerVariant}>{triggerValue}</Button>
      </PopoverTrigger>
      <PopoverContent width={size} mx="10px">
        {header && <PopOverHeader />}
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>)
  }
  return (
    <>
      {closable ? <UncloseAblePopover/> : <CloseAblePopover/>}
    </>
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
  closable
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
      closable={closable}
    >
      {children}
    </PopOver>
    </popOverContext.Provider>
  );
};

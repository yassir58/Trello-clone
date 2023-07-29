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
} from "@chakra-ui/react";
import React from "react";

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
      <Popover placement={placement}>
        <PopoverTrigger>
          <Button variant={triggerVariant}>{triggerValue}</Button>
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
  const trigger = () => {
    return (
      <HStack spacing={1}>
        {icon} <Text fontSize="sm">{value}</Text>
      </HStack>
    );
  };
  return (
    <PopOver
      size={size}
      placement={placement}
      header={header}
      triggerValue={trigger()}
      triggerVariant={triggerVariant}
    >
      {children}
    </PopOver>
  );
};

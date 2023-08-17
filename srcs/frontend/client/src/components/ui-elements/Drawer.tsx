import React from "react";
import {
  Button,
  HStack,
  useDisclosure,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Divider,
} from "@chakra-ui/react";
interface DrawerCpProps {
  header?: string;
  value?: string;
  icon?: React.ReactNode;
  variant?: string;
  children?: React.ReactNode;
}

export const DrawerCp: React.FC<DrawerCpProps> = ({
  header,
  value,
  icon,
  variant,
  children
}) => {
  // const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button variant={variant} onClick={onOpen}>
        <HStack>
          {icon}
          <Text fontSize="sm">{value}</Text>
        </HStack>
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <Divider />
          <DrawerBody>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

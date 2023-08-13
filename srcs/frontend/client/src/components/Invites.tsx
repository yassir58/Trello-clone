import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ReceivedInvitesList from "./Lists/ReceivedInvitesList";
import SentInvitesList from "./Lists/SendInvitesList";

interface ModelProps {
  open: boolean;
  onClose: () => void;
}

const Invites = ({open, onClose}: ModelProps) => {
  return (
    <>
      <Modal isOpen={open} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#828282">Invites</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="soft-rounded" colorScheme="gray">
              <TabList>
                <Tab>Received</Tab>
                <Tab>Sent</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ReceivedInvitesList />
                </TabPanel>
                <TabPanel>
                  <SentInvitesList />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Invites;

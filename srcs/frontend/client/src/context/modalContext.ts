import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

type ModalProps = ReturnType<typeof useDisclosure>;

interface ModalContext {
  profileModal: ModalProps;
  inviteModal: ModalProps;
}

export const ModalsContext = createContext<ModalContext>({} as ModalContext);

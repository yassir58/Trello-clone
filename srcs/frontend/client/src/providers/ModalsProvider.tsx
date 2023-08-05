import React, { ReactNode } from "react";
import { ModalsContext as ModalsContext } from "../context/modalContext";
import { useDisclosure } from "@chakra-ui/react";

interface ProviderProps {
  children: ReactNode;
}

const ModelsProvider = ({ children }: ProviderProps) => {
  const profileModal = useDisclosure();
  const inviteModal = useDisclosure();

  return <ModalsContext.Provider value={{ profileModal, inviteModal }}>{children}</ModalsContext.Provider>;
};

export default ModelsProvider;

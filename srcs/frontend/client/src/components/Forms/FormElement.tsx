import React, { ReactNode } from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface formProps {
  label: string;
  errorMessage: string;
  children: ReactNode;
}

const FormElement = ({ children, label, errorMessage }: formProps) => {
  return (
    <>
      <FormControl isInvalid={false}>
        <FormLabel variant="primary">{label}</FormLabel>
        {children}
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default FormElement;

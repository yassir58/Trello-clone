import React from "react";
import { Input, Button, VStack } from "@chakra-ui/react";

import FormContainer from "../Forms/FormContainer";
import FormElement from "../Forms/FormElement";

const ForgotPasswordForm = () => {
  return (
    <>
      <VStack>
        <FormContainer title="Thullo reset password">
          <FormElement
            label="Email:"
            errorMessage="Email you provided is invalid"
          >
            <Input
              variant="outline"
              type="email"
              placeholder="eg.johndoe@mail.com"
            />
          </FormElement>
          <Button variant="primary" width="100%" paddingY={3} marginTop={3}>
            Reset password
          </Button>
        </FormContainer>
      </VStack>
    </>
  );
};

export default ForgotPasswordForm;

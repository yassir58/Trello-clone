import React from "react";
import { Input, Button, VStack } from "@chakra-ui/react";

import FormContainer from "../Forms/FormContainer";
import FormElement from "../Forms/FormElement";

const ResetPasswordForm = () => {
  return (
    <>
      <VStack>
        <FormContainer title="Thullo reset password">
          <FormElement
            label="Password:"
            errorMessage="Email you provided is invalid"
          >
            <Input
              variant="outline"
              type="password"
              placeholder="At least 6 characters"
            />
          </FormElement>
          <FormElement
            label="Confirm password:"
            errorMessage="Email you provided is invalid"
          >
            <Input
              variant="outline"
              type="password"
              placeholder="Should match password field"
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

export default ResetPasswordForm;

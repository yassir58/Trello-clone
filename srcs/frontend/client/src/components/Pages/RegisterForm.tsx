import React from "react";
import { Input, Button, VStack } from "@chakra-ui/react";

import FormContainer from "../Forms/FormContainer";
import FormElement from "../Forms/FormElement";
import FormReminder from "../Forms/FormReminder";

const RegisterForm = () => {
  return (
    <>
      <VStack>
        <FormContainer title="Sign up to Thullo">
          <FormElement label="Full name:" errorMessage="Wrong">
            <Input
              variant="outline"
              type="text"
              placeholder="Example: John doe"
            />
          </FormElement>
          <FormElement label="Email:" errorMessage="Email">
            <Input
              variant="outline"
              type="email"
              placeholder="eg.johndoe@mail.com"
            />
          </FormElement>
          <FormElement label="Password:" errorMessage="Password">
            <Input
              variant="outline"
              type="password"
              placeholder="Minimum of 6 characters"
            />
          </FormElement>
          <FormElement label="Confirm password:" errorMessage="Password">
            <Input
              variant="outline"
              type="password"
              placeholder="Minimum of 6 characters"
            />
          </FormElement>
          <Button variant="primary" width="100%" paddingY={3} marginTop={3}>
            Sign up
          </Button>
        </FormContainer>
        <FormReminder
          reminderText="Already have an account ?"
          callToAction="Sign in"
          linkToAction="/login"
        />
      </VStack>
    </>
  );
};

export default RegisterForm;

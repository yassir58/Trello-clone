import React from "react";
import { Input, Button, Link, VStack } from "@chakra-ui/react";

import FormContainer from "../Forms/FormContainer";
import FormElement from "../Forms/FormElement";
import FormReminder from "../Forms/FormReminder";

const LoginForm = () => {
  return (
    <>
      <VStack>
        <FormContainer title="Sign in to Thullo">
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
            <Link
              href="./reset_password"
              isExternal
              color="primary"
              float="right"
            >
              Forgot password ?
            </Link>
          </FormElement>
          <Button variant="primary" width="100%" paddingY={3} marginTop={3}>
            Sign in
          </Button>
        </FormContainer>
        <FormReminder
          reminderText="First time here ?"
          callToAction="Create an account"
          linkToAction="./signup"
        />
      </VStack>
    </>
  );
};

export default LoginForm;

import React, { ChangeEvent } from "react";
import { Button, InputGroup, InputRightElement, Input } from "@chakra-ui/react";

interface SearchFormProps {
  ChangeCb: (e: ChangeEvent<HTMLInputElement>) => void;
  ClickCb: () => void;
  FocusCb: () => void;
}

const FormSearchInput = ({ ChangeCb, ClickCb, FocusCb }: SearchFormProps) => {
  return (
    <>
      <InputGroup size="md">
        <Input
          variant="outline"
          pr="4.5rem"
          type="text"
          placeholder="Keyword..."
          width="400px"
          onChange={ChangeCb}
          onFocus={FocusCb}
        />
        <InputRightElement width="4.5rem" right="2px">
          <Button h="2.2rem" size="sm" onClick={ClickCb}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default FormSearchInput;

import React from "react";
import { HStack, Input, Button, FormControl } from "@chakra-ui/react";
import { FaSistrix } from "react-icons/fa6";
import { z } from "zod";
import { FormErrorMessage, FormHelperText, Stack } from "@chakra-ui/react";

interface SearchInputProps {
  state: string;
  stateSetter: React.Dispatch<React.SetStateAction<string>>;
  action?: (keyword: string) => void;
}
export const SearchInput: React.FC<SearchInputProps> = ({ state, stateSetter, action }) => {
  const inputValidator = z.string().min(5);
  const isError = inputValidator.safeParse(state);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    stateSetter(e.target.value);
    action && action(e.target.value);
  };
  return (
    <Stack>
      <FormControl isInvalid={!isError?.success}>
          <form onSubmit={(e) =>{
            e.preventDefault();
            action && action(state)}}>
        <HStack justify="space-between" w="98%" boxShadow="lg" borderRadius="lg" p={1} mx="auto" my={4}>
            <Input
              value={state}
              placeholder="Keywords ..."
              fontSize="sm"
              border="node"
              onChange={changeHandler}
              sx={{
                _focus: {
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            />
            <Button variant="primary" onClick={() => action && action(state)}>
              <FaSistrix />
            </Button>
        </HStack>
          </form>
        {!state.length ? (
          <FormHelperText>input required</FormHelperText>
        ) : (
          isError && isError.success === false && <FormErrorMessage>invalid input</FormErrorMessage>
        )}
      </FormControl>
    </Stack>
  );
};

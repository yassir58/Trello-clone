import React from "react";
import { HStack, Input, Button } from "@chakra-ui/react";
import { FaSistrix } from "react-icons/fa6";


interface SearchInputProps {
    state: string;
    stateSetter: React.Dispatch<React.SetStateAction<string>>;
    action?: (keyword: string) => void;
  }
  export const SearchInput: React.FC<SearchInputProps> = ({state, stateSetter, action }) => {
    return (<HStack
      justify="space-between"
      w="98%"
      boxShadow="lg"
      borderRadius="lg"
      p={1}
      mx="auto"
      my={4}
    >
      <Input
        value={state}
        placeholder="Keywords ..."
        fontSize="sm"
        border="node"
        onChange={(e) => {
          stateSetter(e.target.value);
        }}
        sx={{
          _focus: {
            border: "none",
            outline: "none",
            boxShadow: "none",
          },
        }}
      />
      <Button variant="primary" onClick={()=> action && action (state)}>
        <FaSistrix />
      </Button>
    </HStack>);
    
  };
  
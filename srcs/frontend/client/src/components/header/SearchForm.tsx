import React from 'react'
import { chakra, Button } from '@chakra-ui/react'

interface SearchFormProps {}





export const SearchForm: React.FC<SearchFormProps> = () => {
    return (
      <div>
        <chakra.form
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          rounded="md"
          bg="white"
          color="gray.300"
          w="2xs"
          p="2px"
          boxShadow="base"
        >
          <chakra.input
            type="text"
            className="bg-transparent border-0 outline-none w-3/5 px-30"
            opacity="1"
            px="2px"
            py="2px"
            w="3/5"
            border="0"
            fontSize="xs"
            outline="none"
            placeholder={"keywords ..."}
            color="gray.600"
          />
          <Button variant="primary">
            <chakra.small>Search</chakra.small>
          </Button>
        </chakra.form>
      </div>
    );
  };
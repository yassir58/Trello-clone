import React from 'react'
import { Flex, chakra, Button, HStack } from '@chakra-ui/react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { HeaderProps } from './header'
interface NavProps  {
  Board:HeaderProps["Board"]
}

export const Nav: React.FC<NavProps> = ({
  Board
}) => {
    return (
      <Flex justify="space-between" align="center">
        <chakra.h3 px="5px">{Board?.title || ''}</chakra.h3>
        <chakra.div
          className="w-px h-10 bg-gray-300 m-3.5"
          width="1px"
          height="1.8rem"
          bg="gray.200"
          mx="1.5rem"
        ></chakra.div>
        <Link to="/">
          <Button variant="secondary">
            <HStack spacing={2}>
              <BsFillGrid3X3GapFill />
              <chakra.small>All boards</chakra.small>
            </HStack>
          </Button>
        </Link>
      </Flex>
    );
  };
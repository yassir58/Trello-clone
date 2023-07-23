import React from "react";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  HStack,
  // Wrap,
  Stack,
} from "@chakra-ui/react";

import { MdPublic } from "react-icons/md";
import { MdLock } from "react-icons/md";

const Visibility = () => {
  return (
    <Card borderRadius="xl" boxShadow='none' border='none' width={234} h={'auto'}>
      <CardHeader>
        <Heading width={49} height={18} fontSize="12" as="b">
          Visibility
        </Heading>
        <Text fontSize="12" color="gray">
          choose who can see the board.
        </Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <Stack spacing={4}>
          
            <Stack spacing={2} p="8px" borderRadius={'lg'} sx={{
              _hover: {
                bg:'gray.100'
              }
            }}>
              <HStack spacing={2} >
                <MdPublic />
                <Text fontSize='sm' fontWeight={'normal'} color='#828282'>Public</Text>
              </HStack>
              <Text  fontSize='xs' fontWeight={'normal'} color='gray'>Anyone on the internet can see this board</Text>
            </Stack>

            <Stack spacing={2} p="10px" borderRadius={'lg'} sx={{
              _hover: {
                bg:'gray.100'
              }
            }}>
              <HStack spacing={2} >
                <MdLock/>
                <Text fontSize='sm' fontWeight={'normal'} color='#828282'>Private</Text>
              </HStack>
              <Text  fontSize='xs' fontWeight={'normal'} color='gray'>Only members can see this board</Text>
            </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Visibility;

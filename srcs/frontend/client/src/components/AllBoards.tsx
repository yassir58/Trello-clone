import React, { useState, useEffect } from "react";
import {
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useDisclosure,
  // Box
} from "@chakra-ui/react";
import { SmallLogo, ProfileHeader, SearchForm } from "./header/header";
import { ModalComponent, NewBoard } from "./Popover";
import { CardCp } from "./ui-elements/Media";
import { BiPlus } from "react-icons/bi";
interface AllBoardsProps {}
export interface BoardProps {
  id: number;
  title: string;
  image?: string;
}
export const AllBoards: React.FC<AllBoardsProps> = () => {
  const AllBoards = [
    {
      id: 1,
      title: "Job search",
      image:
        "https://images.unsplash.com/photo-1519038147911-84a336c20250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Marathon planning",
      image:
        "https://images.unsplash.com/photo-1633430552351-51caf0fb16a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Soccer",
      image:
        "https://images.unsplash.com/photo-1688880495039-9b58ae992edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Taking care of animals",
      image:
        "https://images.unsplash.com/photo-1688417143504-a78cda66437e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  // testing ui
  useEffect(() => {
    const temp: BoardProps[] = AllBoards.slice();
    setBoards(temp);
  }, []);
  const [boards, setBoards] = useState<BoardProps[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
      <Stack spacing={10} mt='120px'>
        <Flex
          className="header"
          px={6}
          py={4}
          justify="space-between"
          align="center"
        >
          <SmallLogo />
          <HStack spacing={3}>
            <SearchForm />
            <ProfileHeader />
          </HStack>
        </Flex>
        <Stack spacing={12}>
          <HStack
            w="80%"
            mx="auto"
            spacing={3}
            px={6}
            justify="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Heading size="md">All Boards</Heading>
            <ModalComponent
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              style={{ size: "sm", buttonSize: "sm", colorScheme: "blue" }}
              buttonValue={
                <HStack spacing={2}>
                  <BiPlus />
                  <Text size="sm" fontWeight="normal">
                    Add
                  </Text>
                </HStack>
              }
            >
              <NewBoard action={setBoards} state={boards} onClose={onClose} />
            </ModalComponent>
          </HStack>
          <HStack
            w="80%"
            mx="auto"
            justify="flex-start"
            spacing={4}
            flexWrap="wrap"
          >
            {boards.map((board, index) => {
              return (
                <CardCp
                  card={{
                    id: index,
                    title: board.title,
                    cardBanner: board.image,
                  }}
                  width="2xs"
                />
              );
            })}
          </HStack>
        </Stack>
      </Stack>
  );
};

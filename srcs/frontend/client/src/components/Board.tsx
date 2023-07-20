import React, { useEffect, useState } from "react";
import {
  chakra,
  Avatar,
  Flex,
  HStack,
  Stack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { FlexContainer, ColumnContainer } from "./ui-elements/Containers";
import { CardList } from "./ui-elements/Media";
import { PopOver, DrawerCp} from "./Popover";
import Visibility from "./Visibility";
import { Menu } from "./Menu";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {EditBoard} from "./EditBoard";
import { ChangeCover } from "./ChangeCover";
import { AddList } from "./AddCard";
interface BoardProps {}

interface BoardMenuBarProps {
  members: string[];
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({ members }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack>
      <Flex
        justify="space-between"
        align="center"
        w="98%"
        h="auto"
        mx="auto"
        mt="30px"
        mb="25px"
      >
        <HStack spacing={3}>
          <PopOver
            button={
              <Button variant={"secondary"}>
                <HStack>
                  <BsGlobeEuropeAfrica />
                  <Text fontSize={"xs"} fontWeight={"normal"}>Public</Text>
                </HStack>
              </Button>
            }
            size="2xs"
          >
            <Visibility />
          </PopOver>
          {members.map((member) => {
            return (
              <Avatar size="sm" rounded="md" borderRadius="md" src={member} />
            );
          })}

          <PopOver
            size="2xs"
            button={
              <Button variant={"primary"}>
                <BiPlus />
              </Button>
            }
          >
            {/* <AddLable /> */}
            <ChangeCover />
          </PopOver>
          <EditBoard />
        </HStack>
        <DrawerCp
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          header="Menu"
          buttonValue={
            <HStack spacing={2}>
              <Text fontSize={"xs"} fontWeight={"normal"}>
                Menu
              </Text>
              <FaEllipsis />
            </HStack>
          }
        >
          <Menu />
        </DrawerCp>
      </Flex>
    </Stack>
  );
};

export const Board: React.FC<BoardProps> = () => {
  const members = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const [cards, setCards] = useState([]);
  const [addList, setAddList] = useState(false);
  const endPoint = "http://localhost:3001/Data";

  const handleToggle = () => setAddList(!addList);

  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <Stack mt="60px" bg={"white"}>
      <BoardMenuBar members={members} />
      <FlexContainer>
        <CardList cards={cards} />
        <CardList />
        <ColumnContainer>
          {addList ? (
            <AddList cancelHandler={handleToggle} />
          ) : (
            <Button variant="largePrimary" onClick={handleToggle}>
              <chakra.small>Add another list</chakra.small>
              <BiPlus />
            </Button>
          )}
        </ColumnContainer>
      </FlexContainer>
    </Stack>
  );
};

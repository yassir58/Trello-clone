import React, { useEffect, useState } from "react";
import { chakra, Avatar, Flex, HStack } from "@chakra-ui/react";
import { LargeButton } from "./ui-elements/Buttons";

import { FlexContainer, ColumnContainer } from "./ui-elements/Containers";
import { CardList } from "./ui-elements/Media";
import { PopOver, ModalComponent, NewBoard } from "./Popover";
import Visibility from "./Visibility";
import { Menu } from "./Menu";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import InviteToBoard from "./InviteToBoard";
interface BoardProps {}


interface BoardMenuBarProps {
  members: string[];
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({ members }) => {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        w="98%"
        h="auto"
        mx="auto"
        mt="20px"
        mb="30px"
      >
        <HStack spacing={3}>
          <PopOver
            icon={<BsGlobeEuropeAfrica />}
            value="public"
            size="2xs"
            buttonTheme={{ bg: "gray.100", color: "gray.500" }}
          >
            <Visibility />
          </PopOver>
          {members.map((member) => {
            return (
              <Avatar size="sm" rounded="md" borderRadius="md" src={member} />
            );
          })}

          <PopOver
            icon={
              <chakra.span fontSize="lg">
                <BiPlus />
              </chakra.span>
            }
            size="2xs"
            buttonTheme={{ bg: "blue.500", color: "white" }}
          >
            <InviteToBoard />
          </PopOver>
          <ModalComponent style={{size:'sm'}}>
            <NewBoard />
          </ModalComponent>
        </HStack>
        <PopOver
          icon={<FaEllipsis />}
          value="Menu"
          header="Menu"
          size="md"
          buttonTheme={{ bg: "gray.100", color: "gray.500" }}
        >
          <Menu />
        </PopOver>
      </Flex>
    </div>
  );
};

export const Board: React.FC<BoardProps> = () => {
  const members = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const [cards, setCards] = useState([]);
  const endPoint = "http://localhost:3001/Data";

  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <BoardMenuBar members={members} />
      <FlexContainer>
        <CardList cards={cards} />
        <CardList />
        <ColumnContainer>
          <LargeButton>
            <chakra.small>Add another list</chakra.small>
            <BiPlus />
          </LargeButton>
        </ColumnContainer>
      </FlexContainer>
    </div>
  );
};

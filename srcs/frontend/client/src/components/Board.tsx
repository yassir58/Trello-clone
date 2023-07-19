import React, { useEffect, useState } from "react";
import { chakra, Avatar, Flex, HStack , Stack, Text} from "@chakra-ui/react";
import { LargeButton } from "./ui-elements/Buttons";

import { FlexContainer, ColumnContainer } from "./ui-elements/Containers";
import { CardList } from "./ui-elements/Media";
import { PopOver , DrawerCp} from "./Popover";
import Visibility from "./Visibility";
import { Menu } from "./Menu";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
// import InviteToBoard from "./InviteToBoard";
// import { AddLable } from "./AddLable";
import { ChangeCover } from "./ChangeCover";
interface BoardProps {}


interface BoardMenuBarProps {
  members: string[];
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({ members }) => {


  
  return (
    <Stack >
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
            buttonTheme={{ colorScheme: 'gray', size:'sm', color:'#828282' }}
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
            buttonTheme={{ colorScheme:'blue', size: "sm" }}
          >
            {/* <AddLable /> */}
            <ChangeCover />
          </PopOver>
    
        </HStack>
        <DrawerCp header='Menu' buttonValue={
          <HStack spacing={2}>
            <Text fontSize={'xs'} fontWeight={'normal'}>Menu</Text>
            <FaEllipsis />
          </HStack>
        }>
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
  const endPoint = "http://localhost:3001/Data";

  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <Stack mt='80px'>
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
    </Stack>
  );
};

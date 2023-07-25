import React, {  useState } from "react";
import {
  chakra,
  HStack,
  Stack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";


import { PopOver, DrawerCp} from "./Popover";
import Visibility from "./Visibility";
import { Menu } from "./Menu";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {EditBoard} from "./EditBoard";
import { ChangeCover } from "./ChangeCover";
import { AddList } from "./AddCard";
import {   List } from "../context/ContextScheme";
import { CardList } from "./CardList";
import {Container} from "./ui-elements/Wrappers";
interface BoardProps {
  // BoardId:number
}

interface BoardMenuBarProps {
  // BoarStateSetter:any
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack>
      <Container variant='mdSpaceBetween'>
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
          {/* {BoardState.members.map((member) => {
            return (
              <Avatar size="sm" rounded="md" borderRadius="md" src={member.profilePicture} />
            );
          })} */}

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
      </Container>
    </Stack>
  );
};

export const Board: React.FC<BoardProps> = () => {

  const [lists, setLists] = useState<List[]>([])
  const [addList, setAddList] = useState<boolean>(false);

  const handleToggle = () => setAddList(!addList);
  const handleAddList = (title:string) => {
    const tmp:List[] = lists.slice();
    tmp.push({id:new Date().getTime (),title:title, cards:[], creationDate:"2021-05-01T00:00:00.000Z", editDate:"2021-05-01T00:00:00.000Z", boardId:1});
    setLists(tmp);
    handleToggle();
  }
  
  return (
    <Stack mt="90px">
      <BoardMenuBar  />
      <Container variant='boardStack'>
        
        {lists.map((list:List) => {
          return (
            <CardList list={list} state={lists} stateSetter={setLists} />
          )
        })}
        <Stack>
          {addList ? (
            <AddList cancelHandler={handleToggle} actionHandler={handleAddList}  />
          ) : (
            <Button variant="largePrimary" onClick={handleToggle}>
              <chakra.small>Add another list</chakra.small>
              <BiPlus />
            </Button>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

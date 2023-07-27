import React, {  useState } from "react";
import {
  chakra,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";


import {DrawerCp} from "./ui-elements/Drawer";
import Visibility from "./Visibility";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {EditBoard} from "./Functionality/EditBoard";
import { ChangeCover } from "./Functionality/ChangeCover";
import { AddList } from "./Functionality/AddCard";
import {   List } from "../context/ContextScheme";
import { CardList } from "./CardList";
import {Container} from "./ui-elements/Wrappers";
import { PopOverWrapper } from "./ui-elements/PopOver";
interface BoardProps {
  // BoardId:number
}

interface BoardMenuBarProps {
  // BoarStateSetter:any
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({}) => {
  return (
    <Stack>
      <Container variant='mdSpaceBetween'>
        <HStack spacing={3}>
          <PopOverWrapper
            triggerVariant="secondary"
            value={'Public'}
            icon={<BsGlobeEuropeAfrica/>}
            size="2xs"
          >
            <Visibility />
          </PopOverWrapper>
          
          <PopOverWrapper
            triggerVariant="primary"
            value={"Add"}
            icon={<BiPlus />}
            size='2xs'
          >
            <ChangeCover />
          </PopOverWrapper>
          <EditBoard />
        </HStack>
        <DrawerCp
          header="Menu"
          value="Menu"
          icon={<FaEllipsis />}
          variant="secondary"
        />
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

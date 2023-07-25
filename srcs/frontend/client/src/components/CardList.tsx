import React, { useState } from "react";
import { Box, Button, chakra,  Heading, useDisclosure , Stack} from "@chakra-ui/react";

import { CardCp } from "./ui-elements/Media";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {  List, Card } from "../context/ContextScheme";
import { EditCardComponent, ModalComponent, PopOver } from "./Popover";
import { Container } from "./ui-elements/Wrappers";
import {ListOptions} from "./ThreeDot";
import AddCard from "./AddCard";

interface CardListProps {
    // Board:Board,
    list:List,
    state:List[] ,
    stateSetter: React.Dispatch<React.SetStateAction<List[]>> ;

}


export const CardList: React.FC<CardListProps> = ({list, state, stateSetter}) => {
  
    const [cards, setCards] = useState<Card[]> ([])
    const [createCard, setCreateCard] = useState(false);
    const createCardToggler = () => {
      setCreateCard(!createCard);
    };
    const handleRemoveList = (id:number,state:List[], stateSetter:React.Dispatch<React.SetStateAction<List[]>>)=>{
      console.log (state)
      const tmp:List[] = state.slice ().filter (list=>list.id != id);
      stateSetter (tmp)
    }
    const createCardHandler = (title:string) => {
      const tmp:Card[] = cards?.slice();
      const card:Card = {
        id: new Date().getTime(),
        title: title,
        listId: list.id,
        creationDate: "2021-05-01T00:00:00.000Z",
        editDate: "2021-05-01T00:00:00.000Z",
        BoardId: 1,
      }
      tmp.push(card);
      setCards(tmp);
      createCardToggler();
    }
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
      <div>
        <Stack>
          <Container variant="mdSpaceBetween">
            <Heading variant='listTitle'>
              {list.title}
            </Heading>
            <PopOver
              button={<Button variant={'ghost'}><FaEllipsis/></Button>}
              size="3xs"
            >
              <ListOptions removeList={()=>handleRemoveList(list.id, state, stateSetter)}/>
            </PopOver>
          </Container>
  
          {createCard ? (
            <AddCard cancelHandler={createCardToggler} action={createCardHandler} />
          ) : (
            <Button onClick={createCardToggler} variant='largePrimary'>
              <chakra.small>Add another Card</chakra.small>
              <BiPlus />
            </Button>
          )}
  
          <Container variant='listStack'>
            {cards &&
              cards.map((item, index) => {
                return (
                  <Box>
                    <CardCp card={item} boardCard={true}  onClick={onOpen} key={index} />
                    <ModalComponent
                      style={{ size: "2xl" }}
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                    >
                      <EditCardComponent onClose={onClose} card={item} state={{cards,setCards}} />
                    </ModalComponent>
                  </Box>
                );
              })}
          </Container>
        </Stack>
      </div>
    );
  };
  
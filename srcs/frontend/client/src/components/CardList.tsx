import React, { useState } from "react";
import { Box, Button, chakra,  Heading, Stack} from "@chakra-ui/react";

import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {  List, Card } from "../context/ContextScheme";
import { Container } from "./ui-elements/Wrappers";
import {ListOptions} from "./ListOptions";
import AddCard from "./Functionality/AddCard";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { ModalCardWrapper } from "./ui-elements/Modal";
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
    return (
      <div>
        <Stack>
          <Container variant="mdSpaceBetween">
            <Heading variant='listTitle'>
              {list.title}
            </Heading>
            <PopOverWrapper
              triggerVariant={"ghost"}
              icon={<FaEllipsis />}
              size="3xs"
            >
              <ListOptions removeList={()=>handleRemoveList(list.id, state, stateSetter)}/>
            </PopOverWrapper>
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
                    <ModalCardWrapper
                      card={item}
                      id={index}
                    />
                  </Box>
                );
              })}
          </Container>
        </Stack>
      </div>
    );
  };
  
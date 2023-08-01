import React, { useState } from "react";
import { Box, Button, chakra, Stack} from "@chakra-ui/react";

import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {  List, Card } from "../context/ContextScheme";
import { Container } from "./ui-elements/Wrappers";
import {ListOptions} from "./ListOptions";
import AddCard from "./Functionality/AddCard";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { ModalCardWrapper } from "./ui-elements/Modal";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { EditListTitle } from "./Functionality/EditListTitle";
import { handleFocus } from "./Functionality/utils";
interface CardListProps {
    // Board:Board,
    list:List,
    state:List[] ,
    stateSetter: React.Dispatch<React.SetStateAction<List[]>> ;

}


export const CardList: React.FC<CardListProps> = ({list, state, stateSetter}) => {
  
    const [cards, setCards] = useState<Card[]>(list.cards);
    const [createCard, setCreateCard] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const createCardToggler = () => {
      setCreateCard(!createCard);
    };
    const handleRemoveList = (id:number,state:List[], stateSetter:React.Dispatch<React.SetStateAction<List[]>>)=>{
      console.log (state)
      const tmp:List[] = state.slice ().filter (list=>list.id != id);
      stateSetter (tmp)
    }
    const createCardHandler = (title:string) => {
      const tmp:Card[] = cards?.slice() || [];
      const card:Card = {
        id: new Date().getTime(),
        title: title,
        listId: list.id,
        creationDate: "2021-05-01T00:00:00.000Z",
        editDate: "2021-05-01T00:00:00.000Z",
        BoardId: 1,
        labels: [],
      }
      tmp.push(card);
      setCards&& setCards(tmp);
      createCardToggler();
    }
    return (
      <div>
        <Stack>
          <Container variant="mdSpaceBetween">
          <Editable defaultValue={list.title ? list.title : "Add card title"}>
                  <EditablePreview fontSize='sm' />
                  <EditableInput onChange={(e)=>{
                    EditListTitle (state, stateSetter, list.id, e.target.value)
                  }}/>
                </Editable>
            <PopOverWrapper
              triggerVariant={"ghost"}
              icon={<FaEllipsis />}
              size="3xs"
            >
              <ListOptions removeList={()=>handleRemoveList(list.id, state, stateSetter)}/>
            </PopOverWrapper>
          </Container>
  
          {createCard ? (
            <AddCard cancelHandler={createCardToggler} action={createCardHandler} ref={inputRef}/>
          ) : (
            <Button onClick={()=>{
              createCardToggler ()
              handleFocus(inputRef)
            }
              
            } variant='largePrimary'>
              <chakra.small>Add another Card</chakra.small>
              <BiPlus />
            </Button>
          )}
  
          <Container variant='listStack'>
            {cards &&
              cards.map((item:Card, index:number) => {
                return (
                  <Box>
                    <ModalCardWrapper
                      card={item}
                      id={index}
                      key={index}
                      cards={cards}
                      setCards={setCards}
                    />
                  </Box>
                );
              })}
          </Container>
        </Stack>
      </div>
    );
  };
  
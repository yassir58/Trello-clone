import React, {  useState } from "react";
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
// import { EditListTitle } from "./Functionality/EditListTitle";
import { handleFocus } from "./Functionality/utils";
import { useQueryClient } from "react-query";
import { createNewCard } from "./Functionality/createCard";
import { deleteCard } from "./Functionality/deleteCard";
import { useMutation, useQuery } from "react-query";
import { BACKEND_ENDPOINT, JWT } from "../data/DataFetching";


interface CardListProps {
    // Board:Board,
    list:List,
    mutation:any

}


export const CardList: React.FC<CardListProps> = ({list, mutation}) => {
  
    const [cards, setCards] = useState<Card[]>([]);
    const [createCard, setCreateCard] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient ()
    const createCardToggler = () => {
      setCreateCard(!createCard);
    };
    const handleRemoveList = ()=>{
      mutation.mutate(list)
    }
   
    const newCardMutation = useMutation ({
      mutationFn:createNewCard,
      onSuccess:(data)=>{
        console.log (`card list : ${data}`)
        queryClient.invalidateQueries (['cards', list.id])
      },
      // onError:(error)=>{console.log (`error while creating card: ${error}`)}
    })

    const deleteCardMutation = useMutation ({
      mutationFn:deleteCard,
      onSuccess:(data)=>{
        console.log (`card list : ${data}`)
        queryClient.invalidateQueries (['cards', list.id])
      },
      // onError:(error)=>{console.log(`error while deleting card: ${error}`)}
    })

    const {isLoading} = useQuery (['cards', list.id], async ()=>{
      const res = await fetch (`${BACKEND_ENDPOINT}/cards/${list.id}`, {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${JWT}`
        }
      })
      if (!res.ok) throw new Error ('Error fetching cards')
      return await res.json ()
    }, {
      onSuccess:(data)=>{
        console.log (`card lists: ${data}`)
        setCards (data.cards)
      },
      onError:(error)=>{console.log (error)}
    })

    if (isLoading) return <div>loading...</div>
    // useEffect (()=>{
    //   queryClient.invalidateQueries (['cards', list.id])
    // }, [])
    return (
      <div>
        <Stack>
          <Container variant="mdSpaceBetween">
          <Editable defaultValue={list.name ? list.name : "Add card title"}>
                  <EditablePreview fontSize='sm' />
                  <EditableInput onChange={()=>{
                    // EditListTitle (state, stateSetter, list!.id || '', e.target.value)
                  }}/>
                </Editable>
            <PopOverWrapper
              triggerVariant={"ghost"}
              icon={<FaEllipsis />}
              size="3xs"
            >
              <ListOptions removeList={()=>handleRemoveList()}/>
            </PopOverWrapper>
          </Container>
  
          {createCard ? (
            <AddCard cancelHandler={createCardToggler} mutation={newCardMutation} list={list} ref={inputRef}/>
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
                      mutation={deleteCardMutation}
                    />
                  </Box>
                );
              })}
          </Container>
        </Stack>
      </div>
    );
  };
  
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
import { useMutation, useQuery } from "react-query";
import apiClient from "../services/apiClient";


interface CardListProps {
    // Board:Board,
    list:List,
    mutation:any

}

interface cardsRespose {
  status:string ;
  count :number;
  cards:Card[]
}


export const CardList: React.FC<CardListProps> = ({list, mutation}) => {
  
    const [cards, setCards] = useState<Card[]>([]);
    const [createCard, setCreateCard] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const newCardClient = new apiClient ("/cards")
    const allCardsClient = new apiClient<cardsRespose> ("/cards")
    const queryClient = useQueryClient ()
    const createCardToggler = () => {
      setCreateCard(!createCard);
    };
    const handleRemoveList = ()=>{
      mutation.mutate(list)
    }
   
    const newCardMutation = useMutation ({
      mutationFn: (card:Card)=> newCardClient.postData(card).then (res=>res.data),
      onSuccess:(data)=>{
        console.log (`card list : ${data}`)
        queryClient.invalidateQueries (['cards', list.id])
      },
      // onError:(error)=>{console.log (`error while creating card: ${error}`)}
    })

    const deleteCardMutation = useMutation ({
      mutationFn:()=> newCardClient.deleteData ().then (res=>res.data),
      onSuccess:(data)=>{
        console.log (`card list : ${data}`)
        queryClient.invalidateQueries (['cards', list.id])
      },
      // onError:(error)=>{console.log(`error while deleting card: ${error}`)}
    })

    const {isLoading} =useQuery ({
      queryKey:['cards', list.id],
      queryFn: ()=> allCardsClient.getData (null).then (res=>res.data),
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
  
          <Container variant='listStack' className='scrollable-container'>
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
  
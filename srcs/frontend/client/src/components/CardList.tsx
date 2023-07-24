import React, { useState } from "react";
import { Box, Button, chakra,  Heading, useDisclosure , Stack} from "@chakra-ui/react";

import { CardCp } from "./ui-elements/Media";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {  List, Card } from "../context/ContextScheme";
import { EditCardComponent, ModalComponent, PopOver } from "./Popover";
import { Container } from "./ui-elements/Wrappers";
import ThreeDot from "./ThreeDot";
import AddCard from "./AddCard";

interface CardListProps {
    // Board:Board,
    list:List

}


export const CardList: React.FC<CardListProps> = ({list}) => {
  
    const [cards, setCards] =useState<Card[]> ([])
    const [createCard, setCreateCard] = useState(false);
    const createCardToggler = () => {
      setCreateCard(!createCard);
    };
    const createCardHandler = (title:string) => {
      const tmp:Card[] = cards?.slice();
      const card:Card = {
        id: tmp.length + 1,
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
              <ThreeDot />
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
                    <CardCp card={item} boardCard={true} onClick={onOpen} key={index} />
                    <ModalComponent
                      style={{ size: "2xl" }}
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                    >
                      <EditCardComponent onClose={onClose} card={item} />
                    </ModalComponent>
                  </Box>
                );
              })}
          </Container>
        </Stack>
      </div>
    );
  };
  
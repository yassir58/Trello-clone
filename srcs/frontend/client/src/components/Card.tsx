import React from 'react'
import { Container } from './ui-elements/Wrappers'
import { Heading, HStack } from '@chakra-ui/react'
import { Label } from './ui-elements/Label'
import { CardFooter, CardCover } from './ui-elements/Media'
import { Card } from './../context/ContextScheme'
import {RemoveLabel} from './Functionality/RemoveLabel'
export interface CardProps {
    card: Card;
    width?: string;
    height?: string;
    onClick?: () => void;
    cards?: Card[];
    setCards?: React.Dispatch<React.SetStateAction<Card[]>>;
  }

export const CardCp: React.FC<CardProps> = ({
    card,
    onClick,
    cards,
    setCards,
  }) => {
    return (
      <div>
        <Container variant="Card" onClick={onClick}>
          
            {card.cover && <CardCover image={card.cover} />}
            <Heading variant={'cardTitle'}>{card.title}</Heading>
            {
              <HStack spacing={2} flexWrap={'wrap'} px={4} py={2}>
                {card.labels &&
                  card.labels.map((tag, index) => {
                    return <Label removable={false} action={()=>{
                      RemoveLabel(cards, setCards, card.id, index)
                    }} color={tag.color}>{tag.value}</Label>;
                  })}
              </HStack>
            }
            <CardFooter/>
        </Container>
      </div>
    );
  };
  
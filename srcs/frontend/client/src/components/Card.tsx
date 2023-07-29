import React from 'react'
import { Container } from './ui-elements/Wrappers'
import { Heading, HStack } from '@chakra-ui/react'
import { Label } from './ui-elements/Label'
import { CardFooter, CardCover } from './ui-elements/Media'
import { Card } from './../context/ContextScheme'

export interface CardProps {
    card: Card;
    width?: string;
    height?: string;
    onClick?: () => void;
  }

export const CardCp: React.FC<CardProps> = ({
    card,
    onClick,
  }) => {
    return (
      <div>
        <Container variant="Card" onClick={onClick}>
          
            {card.cover && <CardCover image={card.cover} />}
            <Heading variant={'cardTitle'}>{card.title}</Heading>
            {
              <HStack spacing={2} px={4} py={2}>
                {card.labels &&
                  card.labels.map((tag) => {
                    return <Label color={tag.color}>{tag.value}</Label>;
                  })}
              </HStack>
            }
            <CardFooter/>
        </Container>
      </div>
    );
  };
  
import React, {useContext} from 'react'
import { Container } from './ui-elements/Wrappers'
import { Heading, HStack } from '@chakra-ui/react'
import { Label } from './ui-elements/Label'
import { CardFooter, CardCover } from './ui-elements/Media'
import { Card, Label as LabelType } from './../context/ContextScheme'
import { LabelsContext } from './../providers/LabelsProvider'
// import {RemoveLabel} from './Functionality/RemoveLabel'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/apiClient'
import {Skeleton} from './ui-elements/skeleton'

export interface CardProps {
    card: Card;
    width?: string;
    height?: string;
    onClick?: () => void;

  }

  interface CardResponse {
    status:string
    card:Card
  }

export const CardCp: React.FC<CardProps> = ({
    card,
    onClick,
  }) => {

    
    const {labels} = useContext (LabelsContext)
    const [cardObject, setCardObject] = useState<Card>(card)
    const cardByIdClient  = (cardId:string) => new apiClient (`/cards/${cardId}`)

    const {isLoading} = useQuery ({
      queryKey: ['card', card.id],
      queryFn:()=> cardByIdClient (card?.id || '').getData ().then (res=>res.data),
      onSuccess:(data:CardResponse)=>{
        setCardObject (data.card)
      }
    })
    if (isLoading)
      return (<Skeleton/>)
    return (
      <div>
        <Container variant="Card" onClick={onClick}>
          
            {cardObject.coverImage && <CardCover image={cardObject.coverImage} />}
            <Heading variant={'cardTitle'}>{cardObject.title}</Heading>
            {
              <HStack spacing={2} flexWrap={'wrap'} px={4} py={2}>
                {
                  labels?.map((item:LabelType) => {
                    return <Label removable={false} action={()=>{
                      // RemoveLabel(cards, setCards, cardObject.id, index)
                    }} color={item.color}>{item.tag}</Label>;
                  })}
              </HStack>
            }
            <CardFooter/>
        </Container>
      </div>
    );
  };
  
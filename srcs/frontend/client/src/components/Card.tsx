import React, {useContext} from 'react'
import { Container } from './ui-elements/Wrappers'
import { Heading, HStack } from '@chakra-ui/react'
import { Label } from './ui-elements/Label'
import { CardFooter, CardCover } from './ui-elements/Media'
import { Card, Label as LabelType } from './../context/ContextScheme'
import { LabelsContext } from './../providers/LabelsProvider'
// import {RemoveLabel} from './Functionality/RemoveLabel'

import {Skeleton} from './ui-elements/skeleton'

export interface CardProps {
    card: Card;
    width?: string;
    height?: string;
    onClick?: () => void;
    isLoading?:boolean
  }

  

export const CardCp: React.FC<CardProps> = ({
    card,
    onClick,
    isLoading
  }) => {

    
    const {labels} = useContext (LabelsContext)
   
    if (isLoading)
      return (<Skeleton/>)
    return (
      <div>
        <Container variant="Card" onClick={onClick}>
          
            {card.coverImage && <CardCover image={card.coverImage} />}
            <Heading variant={'cardTitle'}>{card.title}</Heading>
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
  
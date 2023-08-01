import React from "react";
import { Card } from "../../context/ContextScheme";


export const removeCard = (cards:Card[] 
  | undefined, setCards:React.Dispatch<React.SetStateAction<Card[]>> | undefined, cardId:number)=>{
  if (cards && setCards)
  {
    const tmp:Card[] = cards.slice ().filter(card=>card.id != cardId)
     setCards (tmp)
  }    
    }
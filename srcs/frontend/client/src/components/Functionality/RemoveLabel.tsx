import React from "react";
import { Card } from "../../context/ContextScheme";

export const RemoveLabel = (
  cards: Card[] | undefined,
  setCards: React.Dispatch<React.SetStateAction<Card[]>> |  undefined,
  cardId: number,
  labelId: number
) => {
  let temp = cards?.slice();
  let index = cards?.findIndex((card) => card.id == cardId);
  if (index == undefined) return;

  if (temp) {
    let labels = temp[index].labels;
    labels?.splice(labelId, 1);
    temp[index].labels = labels;
    setCards && setCards(temp);
  }
};

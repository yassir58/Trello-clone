import { Card } from "../../context/ContextScheme";
export const AddCardTitle = (
  cards: Card[] | undefined,
  setCards: React.Dispatch<React.SetStateAction<Card[]>> | undefined,
  cardId: string ,
  title: string
) => {
  let temp = cards?.slice();
  let index = cards?.findIndex((card) => card.id == cardId);
  if (temp && index != undefined && setCards) {
    temp[index].title = title;
    setCards(temp);
  }
};

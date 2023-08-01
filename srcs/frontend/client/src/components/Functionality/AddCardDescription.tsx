import {Card} from '../../context/ContextScheme'

export const AddCardDescription = (Cards:Card[] | undefined, setCards:React.Dispatch<React.SetStateAction<Card[]>> | undefined, cardId:number, description:string) => {
    let temp = Cards?.slice()
    let index = Cards?.findIndex(card => card.id == cardId)
    if (temp && index != undefined && setCards) {
        temp[index].description = description
        setCards(temp)
    }
}
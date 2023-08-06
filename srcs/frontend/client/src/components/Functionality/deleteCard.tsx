import { Card } from "../../context/ContextScheme";
import { BACKEND_ENDPOINT , JWT} from "../../data/DataFetching";

export const deleteCard = async (card:Card)=>{
  const res = await fetch (`${BACKEND_ENDPOINT}/cards/${card.id}`, {
    method:'DELETE',
    headers:{
      'Authorization': `Bearer ${JWT}`,
    }
  })
  if (!res.ok) throw new Error ('Error deleting card')
  return card.id
}
import {Card} from '../../context/ContextScheme'
import { BACKEND_ENDPOINT , JWT} from '../../data/DataFetching'


export const createNewCard  = async (card:Card)=>{

        const res = await fetch (`${BACKEND_ENDPOINT}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWT}`,

        },
        body:JSON.stringify (card)
    })
    if (!res.ok) throw ("failed to create new card")
    return await res.json ()
}
import { Board} from '../../context/ContextScheme'
import { JWT } from '../../data/DataFetching'

export const createBoard = async (board: Board) => {

    const newBoard = {
        title: board.title,
        coverImage: board.coverImage,
        visibility: true
    }
    const response = await fetch(`http://localhost:5002/api/v1/boards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWT}`,

        },
        body: JSON.stringify(newBoard)
    })
   

    return await response.json()
}




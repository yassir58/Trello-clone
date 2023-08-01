import { Board } from '../../context/ContextScheme'
import { BACKEND_ENDPOINT } from '../../data/DataFetching'
export const createBoard = async (board: Board) => {

    const newBoard = {
        title: board.title,
        coverImage: board.cover,
        visibility: false,
    }
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MzUzODA3LTA5YWMtNDFhYS04YjYxLTFhZmY0MjAxMTUzYyIsImlhdCI6MTY5MDg1MjE1MiwiZXhwIjoxNjk4NjI4MTUyfQ.1ljW6KspwUbJ0g5Hnxf-Vlb6JN-WtDMKoZPuYxBw1l8'
    const response = await fetch(`${BACKEND_ENDPOINT}/boards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,

        },
        body: JSON.stringify(newBoard)
    })
    return await response.json()
}
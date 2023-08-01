import { Board } from '../../context/ContextScheme'
import { BACKEND_ENDPOINT } from '../../data/DataFetching'
export const createBoard = async (board: Board) => {

    const newBoard = {
        title: board.title,
        coverImage: board.cover,
        visibilty: false,
    }
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MzUzODA3LTA5YWMtNDFhYS04YjYxLTFhZmY0MjAxMTUzYyIsImlhdCI6MTY5MDg1NDI4NCwiZXhwIjoxNjk4NjMwMjg0fQ.QEW5RPWkTt3bLwPGcSdUa1IuNVyF0KVKGcGEdggWW50'
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
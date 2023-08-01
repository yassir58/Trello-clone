import { Board } from '../../context/ContextScheme'
import { BACKEND_ENDPOINT } from '../../data/DataFetching'
export const createBoard = async (board: Board) => {

    const newBoard = {
        title: board.title,
        cover: board.cover,
        description: '',
    }
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MzUzODA3LTA5YWMtNDFhYS04YjYxLTFhZmY0MjAxMTUzYyIsImlhdCI6MTY5MDg0MzkzNSwiZXhwIjoxNjk4NjE5OTM1fQ.T-PW3IfesG5cY9O8XfTqqPU7YMyIezDQsPqy10mR-Ig; Path=/; Expires=Sun, 29 Oct 2023 22:52:15 GMT; HttpOnly; Secure';
    const response = await fetch(BACKEND_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(newBoard)
    })
    return await response.json()
}
import { BACKEND_ENDPOINT, JWT } from '../../data/DataFetching';
import { List } from '../../context/ContextScheme';

export const RemoveList = async (list:List) => {
  const res = await fetch (`${BACKEND_ENDPOINT}/boards/${list.boardId}/lists/${list.id}`, {
    method: 'DELETE',
    headers: {
        'Authorization': `Bearer ${JWT}`,
    }
  })
  
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return list.id
}
import { List } from '../../context/ContextScheme';
import apiClient from '../../services/apiClient';
export const RemoveList = async (list:List) => {
  const deleteListClient = new apiClient (`lists/${list.id}`)

  deleteListClient.deleteData().then (res=>res.data)
  return list.id
}
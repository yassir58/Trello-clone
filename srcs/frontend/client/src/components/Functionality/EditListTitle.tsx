import { List } from "../../context/ContextScheme"


export const EditListTitle = (state:List[] , stateSetter: React.Dispatch<React.SetStateAction<List[]>>, listId:string, value:string) => {
    let temp = state.slice()
    let index = state.findIndex(list => list.id == listId)
    if (temp && index != undefined && stateSetter) {
        temp[index].name = value
        stateSetter(temp)
    }
}
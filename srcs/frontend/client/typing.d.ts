
type checklist = {
    id:string
    name?:string
    cardId?:string
}

type Task = {
    content:string
    id:string
    resolved:boolean
}

type comment = {
    content:string
    id:string
    cardId?:string
    createdAt?:string
}
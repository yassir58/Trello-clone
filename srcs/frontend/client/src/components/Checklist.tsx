import { Checkbox, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { Card } from "../context/ContextScheme"
import React from 'react'
import { useTasks } from "../hooks/useTasks"
import { DeleteIcon } from "@chakra-ui/icons"


interface props {
    card:Card
}

interface TaskProps {
    data:any
    isLoading:boolean
}
interface Task {
    task:any
}

const Task:React.FC<Task> = ({task})=>{
    const {deleteTaskMutation, editeTaskMutation} = useTasks (task.cardId)

    const handleCheck = ()=>{
        editeTaskMutation.mutate (task)
    }
    return <HStack justifyContent={'space-between'} alignItems={'center'}>
        <HStack spacing={3}>
            <Checkbox checked={task.resolved} onChange={handleCheck}/>
            <Text>{task.content}</Text>
        </HStack>

        <Icon aria-label=""  color={'grey.500'} as={DeleteIcon} onClick={()=> deleteTaskMutation.mutate (task.id)}/>
    </HStack>
}
export const Checklist:React.FC<props> = ({card})=>{

    const {data, isLoading}:TaskProps = useTasks (card.id!)

    if (isLoading)
        return <Text>is loading ..</Text>
    return (<Stack spacing={4} py={6}>
        {data && data?.count! && data?.tasks!.map ((item:any, index:number)=>{
            return <Task task={item}  key={index}/>
        })}
    </Stack>)
}
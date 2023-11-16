import React, { useRef, useState } from 'react'
import { Card } from "../context/ContextScheme"
import { Button, Input, InputGroup, Stack , InputRightElement, Heading} from "@chakra-ui/react"
import { useTasks } from '../hooks/useTasks'
import { Checklist } from './Checklist'

interface props {
    card?:Card
}
export const CheckLists:React.FC<props> = ({card})=>{

    const {newTaskMutation} = useTasks (card?.id!)
    const ref = useRef <HTMLInputElement>(null)
    const [task, setTask] = useState ('')

    const newTask = ()=>{
        newTaskMutation.mutate (task);
        setTask ('')
    }

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === 'Enter')
            newTask ()
    }
    return (
        <Stack spacing={4}>
            <Heading>Checklist</Heading>
            <InputGroup size='md'>
                <Input onKeyDown={handleEnter} value={task} placeholder='task title' ref={ref!} onChange={(e)=> setTask (e.target.value)} type='text' px={4}/>
                <InputRightElement>
                <Button colorScheme='green' onClick={newTask}>
                    add
                </Button>
                </InputRightElement>
            </InputGroup>
            <Checklist card={card!}/>
        </Stack>
    )
}
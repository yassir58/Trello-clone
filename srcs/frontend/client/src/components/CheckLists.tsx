import React from 'react'
import { Card } from "../context/ContextScheme"
import { useChecklists } from "../hooks/useChecklists"
import { Stack } from "@chakra-ui/react"
import Checklist from "./Checklist"

interface props {
    card?:Card
}
export const CheckLists:React.FC<props> = ({card})=>{

    const {data} = useChecklists (card?.id!)
    return (
        <Stack spacing={4}>
            {data && data.count > 0 && data!.checklists.map((item:any)=> {
                return <Checklist checklist={item} />
            })}
        </Stack>
    )
}
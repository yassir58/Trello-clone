import React from "react"
import { Card } from "../context/ContextScheme"
import { Stack, Text } from "@chakra-ui/react"
import { useComments } from "../hooks/useComments"
import { CommentCard } from "./CommentCard"
interface props {
    card:Card
}
export const CommentList:React.FC<props>  = ({card})=>{

    const {data, isLoading} = useComments (card.id!)

    if (isLoading)
        return <Text>Loading ...</Text>
    return (<Stack spacing={8} py={10}>
        {data && data.count > 0 && data.comments.map((item:any, index:number) => {
            return <CommentCard key={index} comment={item} />
        })}
    </Stack>)
}
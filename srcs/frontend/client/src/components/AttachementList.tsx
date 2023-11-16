import React from "react"
import { Stack , Text} from "@chakra-ui/react"
import useAttachements from "../hooks/useAttachements"
import { Card } from "../context/ContextScheme"
import { AttachementCard } from "./AttachmentCard"

interface props {
    card?:Card
}
export const AttachementsList:React.FC<props> = ({card}) =>{

    const {data, isLoading} = useAttachements (card?.id!)

    if (isLoading)
        return <Text>loading ...</Text>
    return (<Stack py={8} spacing={5}>
        {data && data.count && data.attachements.map ((item:any, index:number)=>{
            return <AttachementCard attachement={item} key={index} />
        })}
    </Stack>)
}
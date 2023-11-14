import React from "react"
import { HStack, Stack, Text, Button } from "@chakra-ui/react"



interface props {
    comment:comment
}

const CommentHeader:React.FC<props> =  ({comment}) =>{
    return (<HStack w='100%' justifyContent={'space-between'}>
        <Stack>
            <Text>{comment.createdAt}</Text>
        </Stack>

        <HStack spacing={3}>
            <Button variant={'ghost'}>edite</Button>
            <Button variant={'ghost'}>delete</Button>
        </HStack>
    </HStack>)
}

export const CommentCard:React.FC<props> = ({comment}) =>{
    return (<Stack spacing={4}>
        <CommentHeader comment={comment} />
        <Text>
            {comment.content}
            </Text>
    </Stack>)
}
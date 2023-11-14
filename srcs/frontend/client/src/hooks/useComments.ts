import { useQuery , useMutation, useQueryClient} from "@tanstack/react-query";
import apiClient from "../services/apiClient"
import { useToast } from "@chakra-ui/react";
import { useSuccess, useFailure } from "./useAlerts";


interface updateComment {
    content:string
    comment:string
}

export const useComments = (cardId:string)=>{
    const newCommentClient = new apiClient ("http://localhost:5002/api/v1/comments");
    const allCommentsClient = new apiClient (`http://localhost:5002/api/v1/cards/${cardId}/comments`)
    const deleteCommentClient = (comment:string) => new apiClient (`http://localhost:5002/api/v1/cards/${cardId}/comments/${comment}`)
    const toast  = useToast ()
    const queryClient = useQueryClient ()

    const {isError, isLoading, data} = useQuery ({
        queryKey:['comments', cardId],
        queryFn: async () => allCommentsClient.getData ().then (res=> res.data),
        onSuccess: (data:any) => console.log (data),
        onError: (err:any) => console.log (err)
    })

    const newCommentMutation = useMutation ({
        mutationFn: async (content:string)=> newCommentClient.postData ({
            "content": content,
            "cardId": cardId
        }),
        onSuccess: () =>{
            queryClient.invalidateQueries (['comment', cardId])
            toast (useSuccess ("Comment created succesfully"))
        },
        onError: () => toast (useFailure ("Failed to create comment"))
    })

    const deleteCommentMutation = useMutation ({
        mutationFn: async (comment:string)=> deleteCommentClient(comment).deleteData(),
        onSuccess: () => {
            queryClient.invalidateQueries (['comment', cardId])
            toast (useSuccess ('Comment deleted successfully'))},
        onError: () => toast (useFailure ('Failed to delete comment'))

    })

    const updateCommentMutation = useMutation ({
        mutationFn: async (args:updateComment) => deleteCommentClient (args.comment).updateData ({
            "content": args.content,
        }, null),
        onSuccess: () => {
            queryClient.invalidateQueries (['comment', cardId])
            toast (useSuccess ('Comment updated successfully'))},
        onError: () => toast (useFailure ('Failed to update comment'))
    })
    return {isError, isLoading, newCommentMutation, deleteCommentMutation, updateCommentMutation, data}
}
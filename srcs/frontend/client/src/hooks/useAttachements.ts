import { useToast } from "@chakra-ui/react"
import apiClient from "../services/apiClient"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useFailure, useSuccess } from "./useAlerts"

interface attachementsArgs {
    title:string
    path:string
}

const useAttachements = (cardId:string)=> {
    const attachementsClient = new apiClient ('http://localhost:5002/api/v1/attachements')
    const queryClient = useQueryClient ()
    const toast = useToast ()


    const {isError, isLoading, data} = useQuery ({
        queryKey:['attachements', cardId],
        queryFn: async ()=> attachementsClient.getData ().then (res=>res.data),
        onSuccess: (data:any) => console.log (data),
        onError: (error:any) => console.log (error)
    })

    const newAttachementsMutation = useMutation ({
        mutationFn: async (args:attachementsArgs) => attachementsClient.postData ({
            "cardId": cardId,
            "title": args.title,
            "path": args.path
        })
    })

    const deleteAttachementMutation = useMutation ({
        mutationFn: async (attachement:string) => attachementsClient.deleteData (`/${attachement}`),
        onSuccess: ()=>{
            queryClient.invalidateQueries (['attachements', cardId])
            toast (useSuccess ("Attachement deleted successfully"))
        },
        onError: () => toast (useFailure ('Failed to delete attachement'))
    })
    return {isError, isLoading, newAttachementsMutation,deleteAttachementMutation, data}
}

export default useAttachements
import apiClient from "../services/apiClient"
import { useQuery, useMutation } from "@tanstack/react-query"

interface attachementsArgs {
    title:string
    path:string
}

const useAttachements = (cardId:string)=> {
    const attachementsClient = new apiClient ('http://localhost:3000/api/v1/attachements')

    const {isError, isLoading} = useQuery ({
        queryKey:['attachements'],
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
    return {isError, isLoading, newAttachementsMutation}
}

export default useAttachements
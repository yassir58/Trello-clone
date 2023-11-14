import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { useToast } from "@chakra-ui/react"
import { useFailure, useSuccess } from "./useAlerts"

interface newChecklistType {
    cardId:string, checklistName:string
}

interface editChecklistType {
    checklistId:string,
    checklistName?:string
}

export const useChecklists = (cardId:string) => {

    const checklistsClient =(cardId:string) => new apiClient (`http://localhost:5002/api/v1/cards/${cardId}/checklists/`)
    const newChecklistClient = new apiClient ("http://localhost:5002/api/v1/checklists")
    const editChecklistsClient = (checkListId:string) => new apiClient (`http://localhost:5002/api/v1/checklists/${checkListId}`)
    const toast = useToast ()
    const queryClient = useQueryClient ()


    const {isError, isLoading, data} = useQuery (
        {
            queryKey: ["checklists", cardId],
            queryFn:async () => checklistsClient (cardId).getData ().then (res=>res.data),
            onSuccess: (data:any) => console.log (data),
            onError: (error:any) => console.log (error)
        }
    )

    const newChecklistMutation = useMutation ({
        mutationFn: async (args:newChecklistType) => newChecklistClient.postData (
            {
                "name": args.checklistName,
                "cardId": args.cardId
            }
        ), 
        onSuccess: () => {
            queryClient.invalidateQueries(['checklists', cardId]);
            toast (useSuccess ("Checklist created successfully"))},
        onError:() =>  toast (useFailure ('Failed to create checklist'))
    })

    const editChecklistMutation = useMutation ({
        mutationFn: async (checklist:editChecklistType) => editChecklistsClient(checklist.checklistId).updateData ({"name":checklist.checklistName}, null),
        onSuccess: () =>{
            queryClient.invalidateQueries(['checklists', cardId]);
            toast (useSuccess ("Checklist edited successfully"))
        },
        onError: () => toast (useFailure ("Failed to edit checklist"))
    })

    const deleteChecklistMutation = useMutation ({
        mutationFn: async (checklistId:string) => editChecklistsClient (checklistId).deleteData (),
        onSuccess: () =>{
            queryClient.invalidateQueries(['checklists', cardId]);
            toast (useSuccess ("Checklist deleted successfully"))
        },
        onError: () => toast (useFailure ("Failed to delete checklist"))
    })

    return {isError, isLoading, newChecklistMutation, editChecklistMutation, deleteChecklistMutation, data}
}
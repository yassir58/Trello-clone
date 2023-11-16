import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { useFailure, useSuccess } from "./useAlerts"
import { useToast } from "@chakra-ui/react"
export const useTasks = (cardId:string)=>{

    const tasksClient = new apiClient ('http://localhost:5002/api/v1/tasks')
    const taskById = (taskId:string)=> new apiClient (`http://localhost:5002/api/v1/tasks/${taskId}`)
    const toast = useToast ()
    const queryClient = useQueryClient ()


    const {isLoading, isError, data} = useQuery ({
        queryKey:['tasks'],
        queryFn: async ()=> tasksClient.getData ().then (res=> res.data),
    })
    const newTaskMutation = useMutation ({
        mutationFn: async (content:string) => tasksClient.postData (
            {
                "content": content,
                "cardId": cardId
            }
        ),
        onSuccess: () => {
            queryClient.invalidateQueries (['tasks'])
            toast (useSuccess ("Task create successfully"))},
        onError: () => toast (useSuccess ("Failed to create task"))
    })

    const deleteTaskMutation = useMutation ({
        mutationFn: async (taskId:string) => taskById (taskId).deleteData (),
        onSuccess : ()=>{
            queryClient.invalidateQueries (['tasks'])
            toast (useSuccess ('Task deleted successfully'))
        }, 
        onError: ()=> toast (useFailure ('Failed to delete task'))
    })

    const editeTaskMutation = useMutation ({
        mutationFn: async (task:Task) => taskById (task.id).updateData ({
                "resolved": !task.resolved
        }, null),
        onSuccess : ()=>{
            queryClient.invalidateQueries (['tasks'])
            toast (useSuccess ('Task edited successfully'))
        }, 
        onError: ()=> toast (useFailure ('Failed to edit task'))
    })

    return {isLoading, isError, data, newTaskMutation, deleteTaskMutation, editeTaskMutation}
}
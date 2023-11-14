import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { useFailure, useSuccess } from "./useAlerts"
import { useToast } from "@chakra-ui/react"
export const useTasks = (checklist:checklist)=>{

    const tasksClient = new apiClient ('http://localhost:5002/api/v1/tasks')
    const taskById = (taskId:string)=> new apiClient (`http://localhost:5002/api/v1/tasks/${taskId}`)
    const tasksByChecklists = new apiClient (`http://localhost:5002/api/v1/checklists/${checklist.id}/tasks`)
    const toast = useToast ()
    const queryClient = useQueryClient ()


    const {isLoading, isError, data} = useQuery ({
        queryKey:['tasks', checklist.id],
        queryFn: async ()=> tasksByChecklists.getData ().then (res=> res.data),
    })
    const newTaskMutation = useMutation ({
        mutationFn: async (content:string) => tasksClient.postData (
            {
                "content": content,
                "checkListId": checklist.id
            }
        ),
        onSuccess: () => {
            queryClient.invalidateQueries (['tasks', checklist.id])
            toast (useSuccess ("Task create successfully"))},
        onError: () => toast (useSuccess ("Failed to create task"))
    })

    const deleteTaskMutation = useMutation ({
        mutationFn: async (taskId:string) => taskById (taskId).deleteData (),
        onSuccess : ()=>{
            queryClient.invalidateQueries (['tasks', checklist.id])
            toast (useSuccess ('Task deleted successfully'))
        }, 
        onError: ()=> toast (useFailure ('Failed to delete task'))
    })

    const editeTaskMutation = useMutation ({
        mutationFn: async (task:Task) => taskById (task.id).updateData ({
                "resolved": !task.resolved
        }, null),
        onSuccess : ()=>{
            queryClient.invalidateQueries (['tasks', checklist.id])
            toast (useSuccess ('Task edited successfully'))
        }, 
        onError: ()=> toast (useFailure ('Failed to edit task'))
    })

    return {isLoading, isError, data, newTaskMutation, deleteTaskMutation, editeTaskMutation}
}
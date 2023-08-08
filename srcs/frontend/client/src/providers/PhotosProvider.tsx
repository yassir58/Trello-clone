import React, {createContext, useState} from 'react'
import { useQuery } from 'react-query'
import apiClient from '../services/apiClient'

interface PhotosContextProps {
    photos?:string[]
    searchPhotos?:(query:string)=>void
    isLoading?:boolean
}
export const PhotosContext = createContext<PhotosContextProps> ({})

interface PhotosProviderProps {
    children: React.ReactNode
}

export const PhotosProvider:React.FC<PhotosProviderProps> = ({children}) => {

    // const [photos, setPhotos] = useState<string[]> ([])
    const count = 12;
    const API_KEY = process.env.REACT_APP_API_KEY 
    const UNSPLASH_ENDPOINT = process.env.REACT_UNSPLASH_ENDPOINT
    const photosClient = new apiClient (`${UNSPLASH_ENDPOINT}photos/random/?client_id=${API_KEY}&count=${count}`)
    const {isLoading} = useQuery ({
        queryKey:['photos'],
        queryFn:()=>{
            photosClient.getData (null).then (res=>res.data)
        },
        onSuccess:(data)=>{
            console.log (`photos: ${data}`)
            // setPhotos (data)
        },
        onError:(error)=>{
            console.log (`error while fetching photos: ${error}`)
        }
    })
    return (
        <PhotosContext.Provider value={{isLoading}}>
                {children}
        </PhotosContext.Provider>
    )
}
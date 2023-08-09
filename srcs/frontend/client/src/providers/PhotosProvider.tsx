import React, {createContext, useState} from 'react'
import { useQuery, QueryClient } from 'react-query'
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

    const [photos, setPhotos] = useState<string[]> ([])
    const [query, setQuery] = useState<string> ('')
    const count = 12;
    const API_KEY = process.env.REACT_APP_API_KEY 
    const UNSPLASH_ENDPOINT = process.env.REACT_UNSPLASH_ENDPOINT
    const url = `${UNSPLASH_ENDPOINT}/photos/random?client_id=${API_KEY}&count=${count}`
    const queryUrl =  (query:string) => `${UNSPLASH_ENDPOINT}/search/photos?client_id=${API_KEY}&query=${query}&per_page=${count}` 
    const queryClient = new QueryClient ()
    const searchPhotos = (query:string)=>{
        setQuery (query)
        queryClient.invalidateQueries (['photos'])
    }
    const {isLoading} = useQuery ({
        queryKey:['photos'],
        queryFn:async ()=>{
            const endpoint = query ? queryUrl (query) : url
           const res = await fetch (endpoint)
           return await res.json ()
        },
        onSuccess:(data)=>{
            console.log (`photos: ${data}`)
            const res = query ? data.results : data
            const urlArray:string[] = []
            res.forEach ((photo:any)=>{
                urlArray.push (photo.urls.small)
            })
            console.log ('url array :', urlArray)
            setPhotos (urlArray)
        },
        onError:(error)=>{
            console.log (`error while fetching photos: ${error}`)
        }
    })
    return (
        <PhotosContext.Provider value={{isLoading, photos:photos, searchPhotos}}>
                {children}
        </PhotosContext.Provider>
    )
}
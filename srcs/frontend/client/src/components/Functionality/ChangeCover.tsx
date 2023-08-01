import { HStack, Stack, chakra, Heading, Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {FaSistrix} from 'react-icons/fa6'
import { AvatarWrapper } from '../ui-elements/Wrappers'
import {Card} from '../../context/ContextScheme'
import { useQuery } from 'react-query'
import { API_KEY,  endpoint} from '../../data/DataFetching'
interface ChangeCoverProps {
    card?:Card,
    cards?:Card[],
    setCards?:React.Dispatch<React.SetStateAction<Card[]>>
}


const setCoverPhoto = (photo:string, state:Card[],stateSetter:React.Dispatch<React.SetStateAction<Card[]>>, cardId:number) => {

    const tmp:Card[] = state.slice ()
    const index = tmp.findIndex (card=>card.id == cardId)
    tmp[index].cover = photo
    console.log (tmp)
    stateSetter (tmp)
}

export const ChangeCover:React.FC<ChangeCoverProps> = ({
    card,
    cards,
    setCards
}) => {

    const [coverPhotos, setCoverPhotos] = useState<string[]>([]);
    const count = 12
    const [keyword, setKeyWord] = useState<string>('')
    const { isLoading, isError,  error } = useQuery ('coverQuery', async () => {
        fetch(`${endpoint}photos/random/?client_id=${API_KEY}&count=${count}`)
        .then (data=>data.json ())
        .then (photos=>{
          const tmp = coverPhotos.slice ()
            photos.forEach((element:any) => {
              tmp.push (element.urls.small)
            });
            setCoverPhotos (tmp)
        })
      })
      if (isLoading)
        console.log ('Loading photos ....')
      else if (isError)
        console.log (`Failed to load photo because : ${error}`)
      else
       { 
        console.log (`Data loaded succesfully :`)
        console.table (coverPhotos)
      }   
    useEffect(() => {
        console.log ('card : ', card)
    }, [])
    return (
        <div>
            <Stack spacing={2}>
                <Heading size="sm">Photo search</Heading>
                <chakra.small color="#BDBDBD" fontSize="xs">Search Unsplash for photos</chakra.small>
            <HStack justify='space-between' w='98%' boxShadow='lg' borderRadius='lg' p={1} mx='auto' my={4}>
                <Input value={keyword} placeholder='Keywords ...' fontSize='sm' border='node'
                onChange={(e)=>{
                     setKeyWord (e.target.value)   
                }}
                sx={{
                    _focus: {
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                    }
                }} />
                <Button variant="primary">
                <FaSistrix />
                </Button>
            </HStack>

            <HStack w='98%' spacing={2} justify='center' flexWrap='wrap'>
                {
                    coverPhotos?.map ((photo, index)=>(
                        <AvatarWrapper key={index} src={photo} variant='clickable' onClick={()=>{
                            setCoverPhoto (photo, cards||[], setCards||(()=>{}), card?.id||0)

                        }} />
                    ))
                }               
            </HStack>
            </Stack>
        </div>
    )
}
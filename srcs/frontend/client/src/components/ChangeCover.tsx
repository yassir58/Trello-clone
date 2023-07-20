import { HStack, Stack, chakra, Heading, Input, Button, Avatar } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {FaSistrix} from 'react-icons/fa6'

interface ChangeCoverProps {

}

export const ChangeCover:React.FC<ChangeCoverProps> = ({}) => {

    let images:React.ReactNode[] = []
    const [imageList, setImageList] = React.useState<React.ReactNode[]>([])
    useEffect(() => {
        for (let i=0; i<12; i++)
        {
            images.push(
                <Avatar borderRadius='lg' 
                sx={{
                    _hover: {
                        boxShadow: 'lg'
                    }
                }}
                src={`https://source.unsplash.com/random/100x100?sig=${i}`} />
            )
        }
        setImageList(images)
    }, [])
    return (
        <div>
            <Stack spacing={2}>
                <Heading size="sm">Photo search</Heading>
                <chakra.small color="#BDBDBD" fontSize="xs">Search Unsplash for photos</chakra.small>
            <HStack justify='space-between' w='98%' boxShadow='lg' borderRadius='lg' p={1} mx='auto' my={4}>
                <Input placeholder='Keywords ...' fontSize='sm' border='node' sx={{
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
                {imageList}
            </HStack>
            </Stack>
        </div>
    )
}
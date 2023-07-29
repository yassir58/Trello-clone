import React from 'react'
import { Box, Image } from '@chakra-ui/react'

interface EditCoverProps {
    image: string;
  }
  
  export const EditCardCover: React.FC<EditCoverProps> = ({ image }) => {
    return (
      <Box position="relative">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          width="100%"
          height={["130px", "130px", "130px", "130px"]}
          mx="auto"
          mt={3}
        >
          <Image
            src={image}
            alt="Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    );
  };
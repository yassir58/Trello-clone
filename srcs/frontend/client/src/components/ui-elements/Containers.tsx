import React from "react";
import { Box, Flex ,Stack} from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
  width?: string;
}

interface PlaceholderProps {
    width: string;
    height: string;
}

interface ColumnProps {
    children: React.ReactNode;
    width?: string;
}

export const FlexContainer: React.FC<Props> = ({ children, width = '98%' }) => {
  
  return (
    <div>
      <Flex w={width} justify="start" justifySelf='center' mx='auto' my='12px'  flexWrap='wrap' align="start" flexDir='row'
      borderRadius='lg' bg='#F8F9FD' px='10px' py='20px' h='auto' border='none' gap='20px'
      >
        {children}
      </Flex>
    </div>
  );
};

export const ColumnContainer: React.FC<ColumnProps> = ({ children, width = 'xs' }) => {
    return (
        <Stack width={width} spacing={4} h='auto' justify='start'  align='center'>
            {children}
        </Stack>
    )
}

export const PlaceholderContainer: React.FC<PlaceholderProps> = ({width, height }) => {
    return (
        <Box w={width} h={height} bg='blue.100' borderStyle="dashed" rounded='md' border='2px solid blue.500'>

        </Box>
    )
}
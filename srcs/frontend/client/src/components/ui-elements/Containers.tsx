import React from "react";
import { Box, Flex } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
  width: string;
}

interface PlaceholderProps {
    width: string;
    height: string;
}

interface ColumnProps {
    children: React.ReactNode;
    width?: string;
}

export const FlexContainer: React.FC<Props> = ({ children, width }) => {
  return (
    <div>
      <Flex w={width} justify="start" justifySelf='center' mx='auto' align="start" flexDir='row'
      rounded='md' bg='blue.50' p='2vw' h='auto' border='none' gap='1vw'
      >
        {children}
      </Flex>
    </div>
  );
};

export const ColumnContainer: React.FC<ColumnProps> = ({ children, width = '20vw' }) => {
    return (
        <Flex w={width} gap='2vh'  flexDir='column' h='auto' justify='start' align='center'>
            {children}
        </Flex>
    )
}

export const PlaceholderContainer: React.FC<PlaceholderProps> = ({width, height }) => {
    return (
        <Box w={width} h={height} bg='blue.100' borderStyle="dashed" rounded='md' border='2px solid blue.500'>

        </Box>
    )
}
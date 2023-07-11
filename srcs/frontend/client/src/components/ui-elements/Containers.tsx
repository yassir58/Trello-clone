import React from "react";
import { Box, Flex , useColorModeValue} from "@chakra-ui/react";
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
  const backgroundColor = useColorModeValue("rgba(236, 242, 255, 0.4)", "rgba(236, 242, 255, 0.4)");
  return (
    <div>
      <Flex w={width} justify="start" justifySelf='center' mx='auto' my='12px'  flexWrap='wrap' align="start" flexDir='row'
      rounded='md' bg={backgroundColor} px='10px' py='20px' h='auto' border='none' gap='20px'
      >
        {children}
      </Flex>
    </div>
  );
};

export const ColumnContainer: React.FC<ColumnProps> = ({ children, width = '2xs' }) => {
    return (
        <Flex width={width} gap='12px'  flexDir='column' h='auto' justify='start'  align='center'>
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
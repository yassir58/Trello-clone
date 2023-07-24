import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface ContainerProps {
    variant?: string
    children?: React.ReactNode
    className?:string
    onClick?:()=>void
}


export const Container:React.FC<ContainerProps> = (props)=> {
  const { variant,children,className, onClick, ...rest } = props

  const styles = useStyleConfig('BoxStyle', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} className={className} onClick={onClick}>
    {children}
  </Box>
}
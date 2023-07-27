import React from 'react'
import { Box, useStyleConfig, Image } from '@chakra-ui/react'

interface ContainerProps {
    variant?: string
    children?: React.ReactNode
    className?:string
    onClick?:()=>void
}

interface AvatarProps {
  variant?: string
  onClick?:()=>void
  src:string
}

export const Container:React.FC<ContainerProps> = (props)=> {
  const { variant,children,className, onClick, ...rest } = props

  const styles = useStyleConfig('BoxStyle', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} className={className} onClick={onClick}>
    {children}
  </Box>
}

export const AvatarWrapper:React.FC<AvatarProps> = (props)=> {
  const { variant, onClick,src, ...rest } = props

  const styles = useStyleConfig('AvatarStyle', { variant })

  // Pass the computed styles into the `__css` prop
  return <Image __css={styles} src={src} {...rest}  onClick={onClick}/>

}
import React from "react";
import {Tag} from "@chakra-ui/react";


interface LabelProps {
    children: React.ReactNode;
    color: string;
    size?: string;
    action?:()=>void
}


export const Label: React.FC<LabelProps> = ({color, children , size ='sm'}) => {
    return (
        <Tag
        bg={`${color}.100`}
        color={`${color}.600`}
        mx="2px"
        px={4}
        py={1}
        size={size}
        rounded="xl"
        fontSize="xs"
        outline="none"
      >
        {children}
      </Tag>
    )
}
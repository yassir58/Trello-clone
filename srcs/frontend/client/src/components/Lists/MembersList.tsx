import React from 'react'
import { User } from '../../context/ContextScheme'
import { HStack } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
interface MembersListProps {
    members:User[]
    max:number
}



export const MembersList: React.FC<MembersListProps> = ({members, max}) => {
    return (
        <HStack spacing={2}>
            {members.slice(0, max).map((member) => {
                
                return (
                    <Avatar
                    height={9}
                    width={9}
                    borderRadius={9}
                    bg="#BDBDBD"
                    name={member.fullname}
                    src={"http://localhost:5002/img/users/" + member?.profileImage}
                  />    
                )
            })}
        </HStack>
    )
}


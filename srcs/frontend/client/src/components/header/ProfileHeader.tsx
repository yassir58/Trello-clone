import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
interface Props {}

const ProfileHeader:React.FC<Props> = ()=>{

    return (
        <div className="flex justify-around px-3 items-center text-gray-800">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""  
            className="w-10 h-12 rounded-md m-2"/>
            <h3 className="text-sm m-4">Javier lima</h3>
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
    )
}


export default ProfileHeader
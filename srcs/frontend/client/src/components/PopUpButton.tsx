import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface Props {
    icon:any,
    value:string
}

const PopUpButton:React.FC<Props> = (props)=>{
    return (
        <button className='text-sm  w-30 h-10 border-0 rounded-md px-4 py-2 bg-gray-200 text-gray-500 m-3.5 hover:text-gray-600 hover:bg-gray-100'> <FontAwesomeIcon icon={props.icon} />  <small className='m-3 text-sm'>{props.value}</small></button>
    )
}

export default PopUpButton
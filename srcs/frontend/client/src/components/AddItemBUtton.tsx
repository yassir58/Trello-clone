import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"



interface Props {
    value: string
}

const AddItemButton: React.FC<Props> = (props) => {

    return (
        <div className="flex w-72 rounded-md justify-between m-4 px-6 py-2 text-blue-500 bg-blue-200 text-md hover:bg-blue-100">
            <small className="px-3">{props.value}</small>
            <FontAwesomeIcon icon={faPlus}/>
        </div>
    )
}


export default AddItemButton
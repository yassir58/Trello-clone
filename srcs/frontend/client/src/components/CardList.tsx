import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AddItemButton from "./AddItemBUtton";


interface Props {
    cardListTitle: string,
    children: React.ReactNode
}



const CardList: React.FC<Props> = (props) => {

    return (
        <div className="flex flex-col justify-center items-center px-2 py-2">
            <div className="flex w-72 justify-between items-center  text-gray-500 py-4 px-2">
                <h3 className="text-gray-900">{props.cardListTitle}</h3>
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
            {
                props.children
            }
            <AddItemButton  value="Add another card "/>
        </div>
    )
}

export default CardList
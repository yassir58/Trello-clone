import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


interface Props {
    icon: any,
    value: string
}


const CardCounter: React.FC<Props> = (props) => {

    return (
        <div className='flex justify-start items-center hover:text-gray-400 text-gray-300 mx-2'>
            <FontAwesomeIcon icon={props.icon} />
            <small className="px-1">{props.value}</small>
        </div>
    )
}

export default CardCounter
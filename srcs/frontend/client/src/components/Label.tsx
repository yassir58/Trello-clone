import React from "react";


interface Props {
    value: string,
    color: string
}


const Label: React.FC<Props> = (props) => {
    return (
        <div className={`rounded-xl px-4 mx-1 bg-${props.color}-200 text-${props.color}-500 text-sm`}>
            <small>{props.value}</small>
        </div>
    )
}

export default Label
import React from "react";



interface Props {
    children: React.ReactNode
}


const BoardSection: React.FC<Props> = (props) => {
    return (
        <div className="BoardSection flex items-start bg-blue-50 rounded-md">
            {props.children}
        </div>
    )
}

export default BoardSection
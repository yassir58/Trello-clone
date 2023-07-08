import React from "react";
import { createContext } from "react";


interface Props {
    children: React.ReactNode;
}

const BoardsContext = createContext({});


export const BoardList: React.FC<Props> = ({children}) => {
    return <div>
        <BoardsContext.Provider value={"divk"}>
            {children}
        </BoardsContext.Provider>
    </div>;
}
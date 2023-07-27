// import React, { useState,  useEffect, useContext} from "react"
// import { AppContext, Board, GlobalState } from "../context/ContextScheme"

// interface UserBoardProps {
//     children:React.ReactNode
// }

// export const UserBoards:React.FC<UserBoardProps> = ({children})=>{
//     const [boardsState, setBoardState] = useState<Array<Board>> ([])
//     const {globalState, setGlobalState} = useContext <GlobalState>(AppContext)
//     useEffect (()=>{
//         const usrState = globalState?.LogedInUser
//         const tmpUser = {...usrState, Boards:{boardsState, setBoardState}}
//         const tmp = {...globalState, PublicBoards:[], LogedInUser:tmpUser }
//         setGlobalState (tmp)
//     }, [])
//     return (
//         <>{children}</>
//     )
// }
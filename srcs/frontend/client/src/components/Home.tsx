import React from "react";
import Header from "./header/header";
import { Board } from "./Board";


interface HomeProps {}






export const Home: React.FC<HomeProps> = ({}) => {
    return (
       <div>
         <Header/>
        <Board />
       </div>
    );
}
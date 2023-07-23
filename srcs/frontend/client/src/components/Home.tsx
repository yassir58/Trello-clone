import React from "react";
import Header from "./header/header";
import { Board } from "./Board";
import { Stack } from "@chakra-ui/react";


interface HomeProps {}






export const Home: React.FC<HomeProps> = ({}) => {
    return (
       <Stack spacing={3}>
         <Header/>
        <Board />
       </Stack>
    );
}
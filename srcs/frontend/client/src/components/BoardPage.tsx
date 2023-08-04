import React, {useContext} from "react";
import Header from "./header/header";
import { Board } from "./Board";
import { AppContext } from "../context/ContextScheme";
import { Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
interface HomeProps {}

export const BoardPage: React.FC<HomeProps> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const {publicBoards} = useContext (AppContext);

  const board = publicBoards?.find (board=>board.id == id);
  console.log (`Board id : ${id}`)
  return (
    <Stack spacing={3}>
      <Header Board={board! || {}}/>
      <Board BoardId={id || ''} />
    </Stack>
  );
};

import React from "react";
import Header from "./header/header";
import { Board } from "./Board";
import { Stack } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { auth } = useAuth();
  if (!auth.loggedIn) return <Navigate to="/login" />;
  return (
    <Stack spacing={3}>
      <Header />
      <Board />
    </Stack>
  );
};

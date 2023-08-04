import React, { useEffect, useState } from "react";
import { HStack, Heading, Stack, Text, Box, useDisclosure } from "@chakra-ui/react";
import { SmallLogo } from "./header/SmallLogo";
// import { NewBoard } from "./Popover";
import { BiPlus } from "react-icons/bi";
import { Board, Boards } from "../context/ContextScheme";
import { BoardCard } from "./ui-elements/Media";
import { Container } from "./ui-elements/Wrappers";
import { ModalButtonWrapper } from "./ui-elements/Modal";
import ProfileMenu from "./Menu/ProfileMenu";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";
import BoardSearch from "./BoardSearch";
interface AllBoardsProps {}
export interface BoardProps {
  id: number;
  title: string;
  image?: string;
}
export const AllBoards: React.FC<AllBoardsProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userBoards, setUserBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  if (!auth.loggedIn) return <Navigate to="/login" />;
  return (
    <Stack mt="120px">
      <Box className="header">
        <Container variant="mdSpaceBetween">
          <SmallLogo />
          <HStack spacing={3}>
            <BoardSearch />
            <ProfileMenu />
          </HStack>
        </Container>
      </Box>
      <Stack>
        <AllBoardsHeader
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          stateObject={{ state: userBoards, setState: setUserBoards }}
        />
        <UserBoards Boards={userBoards || []} />
      </Stack>
    </Stack>
  );
};

interface AllBoardsHeaderProps {
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
  stateObject: Boards | null | undefined;
  globalStateSetter?: any;
}

export const AllBoardsHeader: React.FC<AllBoardsHeaderProps> = ({}) => {
  // const actionHandler = (title: string) => {
  //   const newBoard: Board = {
  //       id: Math.floor(Math.random() * 1000),
  //       title: title,
  //       private: false,
  //       creationDate: new Date().toISOString(),
  //       editDate: new Date().toISOString(),
  //   };
  //   stateObject?.setState([...stateObject.state, newBoard]);
  // };
  return (
    <Container variant="smallSpaceBetween">
      <Heading variant="HeaderTitle">All Boards</Heading>
      <ModalButtonWrapper variant="primary" icon={<BiPlus />} value="Create Board" />
    </Container>
  );
};

interface UserBoardsProps {
  Boards: Board[];
}

export const UserBoards: React.FC<UserBoardsProps> = ({ Boards }) => {
  console.log(Boards);
  return (
    <div>
      <Stack mt="120px" mx="auto">
        <HStack w="90%" mx="auto" justify="flex-start" spacing={4} flexWrap="wrap">
          {Boards.length ? (
            Boards?.map((board: Board) => {
              return <BoardCard Board={board} />;
            })
          ) : (
            <Container variant="placeHolder">
              <Text color={"#828282"} mx="auto" my="auto" fontWeight="bold" fontSize="lg">
                You don't have any boards yet
              </Text>
            </Container>
          )}
        </HStack>
      </Stack>
    </div>
  );
};

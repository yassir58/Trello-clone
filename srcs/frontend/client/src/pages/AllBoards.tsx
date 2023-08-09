import React, {
useEffect,
useState,
useContext
   } from "react";
import { HStack, Heading, Stack, Text, Box, useDisclosure } from "@chakra-ui/react";
import { SmallLogo } from "../components/header/SmallLogo";
// import { NewBoard } from "./Popover";
import { BiPlus } from "react-icons/bi";
import { Board, Boards, AppContext } from "../context/ContextScheme";
import { BoardCard } from "../components/ui-elements/Media";
import { Container } from "../components/ui-elements/Wrappers";
import { ModalButtonWrapper } from "../components/ui-elements/Modal";
import ProfileMenu from "../components/Menu/ProfileMenu";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";
import BoardSearch from "../components/BoardSearch";
import ProfileSettings from "../components/ProfileSettings";
import useModal from "../hooks/useModel";
import { useQuery } from "react-query";
import { BACKEND_ENDPOINT, JWT } from "../data/DataFetching"
interface AllBoardsProps {}
export interface BoardProps {
  id: number;
  title: string;
  image?: string;
}
export const AllBoards: React.FC<AllBoardsProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { publicBoards, setPublicBoards } = useContext(AppContext);
  const {profileModal} = useModal();
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useQuery(
    ["boards"],
    async () => {
      const response = await fetch(`${BACKEND_ENDPOINT}/boards`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    {
      staleTime: 30 * 60 * 1000, // 30 minutes in milliseconds
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(`data from query : ${JSON.stringify(data.boards)}`);
        setPublicBoards && setPublicBoards(data.boards);
      },
      onError: (error) => {
        console.log("error from query :", error);
      },
    }
  );

  // if (isLoading) return <Loading/>;

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
          stateObject={{ state: publicBoards!, setState: setPublicBoards! }}
        />
        <UserBoards Boards={publicBoards || []} />
        <ProfileSettings open={profileModal.isOpen} onClose={profileModal.onClose} />
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

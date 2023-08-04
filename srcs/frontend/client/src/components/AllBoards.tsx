import React, {useContext} from "react";
import {
  HStack,
  Heading,
  Stack,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import {SearchForm} from './header/SearchForm'
import {ProfileHeader} from './header/ProfileHeader'
import { SmallLogo } from "./header/SmallLogo";
// import { NewBoard } from "./Popover";
import { BiPlus } from "react-icons/bi";
import { Board, Boards } from "../context/ContextScheme";
import { BoardCard } from "./ui-elements/Media";
import { Container } from "./ui-elements/Wrappers";
import { ModalButtonWrapper } from "./ui-elements/Modal";
import { AppContext } from "../context/ContextScheme";
import { useQuery } from "react-query";
import { BACKEND_ENDPOINT, JWT } from "../data/DataFetching";
interface AllBoardsProps {

}
export interface BoardProps {
  id: number;
  title: string;
  image?: string;
}
export const AllBoards: React.FC<AllBoardsProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {publicBoards, setPublicBoards} = useContext (AppContext)

  const {isLoading} = useQuery(['boards'], async () => {
    const response = await fetch(`${BACKEND_ENDPOINT}/boards`, {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${JWT}`,
      }})
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
  }, {
    staleTime: 30 * 60 * 1000, // 30 minutes in milliseconds
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
     
      console.log (`data from query : ${JSON.stringify(data.boards)}` )
      setPublicBoards && setPublicBoards(data.boards)
    },
    onError: (error) => {console.log('error from query :', error)},
  })

  if (isLoading) return <div>Loading...</div>
  return (
    <Stack mt="120px">
      <Box className='header'>
      <Container
        variant='mdSpaceBetween'
      >
        <SmallLogo />
        <HStack spacing={3}>
          <SearchForm />
          <ProfileHeader />
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

export const AllBoardsHeader: React.FC<AllBoardsHeaderProps> = ({

}) => {
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
    <Container variant='smallSpaceBetween'>
      <Heading variant='HeaderTitle'>All Boards</Heading>
      <ModalButtonWrapper 
        variant='primary'
        icon={<BiPlus />}
        value='Create Board'/>
    </Container>
  );
};

interface UserBoardsProps {
  Boards: Board[];
}

export const UserBoards: React.FC<UserBoardsProps> = ({Boards}) => {
 return <div>
    <Stack  mt="120px" mx='auto'>
   
    <HStack w='90%' mx='auto' justify='flex-start' spacing={4} flexWrap='wrap'>
      {
        Boards.length ?
        Boards?.map((board:Board) => {
  
          return (
            <BoardCard Board={board} />
          )
        }) : 
        <Container variant='placeHolder'>
          <Text color={'#828282'}  mx='auto' my='auto' fontWeight='bold' fontSize='lg'>You don't have any boards yet</Text>
        </Container>
      }
    </HStack>
    </Stack>
  </div>;
};

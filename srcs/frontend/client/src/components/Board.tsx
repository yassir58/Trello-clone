import React, { useEffect , useState} from "react";
import { chakra, Avatar, Flex, HStack, IconButton} from "@chakra-ui/react";
import {
    SecondaryButton,
    LargeButton,
} from "./ui-elements/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLock,
  faPlus,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FlexContainer, ColumnContainer} from "./ui-elements/Containers";
import { CardList } from "./ui-elements/Media";
interface BoardProps {
  
  
}

interface BoardMenuBarProps {
  visibilty: boolean;
  members: string[];
  toggler: () => void;
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({ visibilty, members , toggler}) => {
  return <div>
    <Flex
        justify="space-between"
        align="center"
        w="98%"
        h="auto"
        mx="auto"
        mt="20px"
        mb="12px"
      >
        <HStack spacing={3}>
          <SecondaryButton onClickHandler={toggler}>
            {visibilty ? (
                <FontAwesomeIcon icon={faGlobe} />
                ) : (
                <FontAwesomeIcon icon={faLock} />
            )}
            <chakra.small>
                {visibilty ? "Public" : "Private"}
            </chakra.small>
          </SecondaryButton>
          {members.map((member) => {
            return <Avatar size='sm' rounded="md" borderRadius='md' src={member} />;
          })}
          <IconButton
          colorScheme='blue'
          size='sm'
          aria-label='Search database'
          icon={<FontAwesomeIcon icon={faPlus} size="lg" />}
/>
        </HStack>
        <SecondaryButton>
          <FontAwesomeIcon icon={faEllipsis} />
          <chakra.small> Menu </chakra.small>
        </SecondaryButton>
      </Flex>
  </div>
}

export const Board: React.FC<BoardProps> = () => {
  const members = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"

]

  const [cards, setCards] = useState([]);
  const [visibilty, setVisibilty] = useState(true);
  const endPoint = "http://localhost:3001/Data";
  const toggleVisibilty = () => {
    setVisibilty(!visibilty);
  }

  useEffect(() => {
    fetch(endPoint)
    .then (response => response.json())
    .then (data => setCards(data))
  },[]);
  return (
    <div>
      <BoardMenuBar visibilty={visibilty} members={members} toggler={toggleVisibilty}/>
      <FlexContainer >
       <CardList cards={cards} /> 
        <ColumnContainer>
        <LargeButton>
          <chakra.small>Add another list</chakra.small>
          <FontAwesomeIcon icon={faPlus} />
        </LargeButton>
        </ColumnContainer>   
      </FlexContainer>
    </div>
  );
};

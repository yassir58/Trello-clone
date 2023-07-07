import React from "react";
import { chakra, Avatar, Flex, HStack, Heading, IconButton} from "@chakra-ui/react";
import {
    SecondaryButton,
    Label,
    LargeButton,
} from "./ui-elements/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLock,
  faPlus,
  faEllipsis,
    faComment,
    faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FlexContainer, ColumnContainer} from "./ui-elements/Containers";
import { CardCp, CardInfo } from "./ui-elements/Media";
interface BoardProps {
  visibilty: boolean;
  members: string[];
}

export const Board: React.FC<BoardProps> = ({ visibilty, members }) => {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        w="98vw"
        h="auto"
        mx="1vw"
        mt="5vh"
        mb="4vh"
      >
        <HStack spacing={3}>
          <SecondaryButton>
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
      <FlexContainer width="98vw">
        <ColumnContainer >
        <Flex w="20vw" justify="space-between" align="center" p="6px">
            <Heading size="sm" fontWeight='normal'>This is list title</Heading>
            <FontAwesomeIcon icon={faEllipsis} />
          </Flex>
          <ColumnContainer>
            {/* here populate list of cards */}
            <CardCp imgSrc="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" cardTitle="this is card title"   >
              <HStack spacing={2}>
                <Label color="yellow">
                  <chakra.small>Technologie</chakra.small>
                </Label>
                <Label color="purple">
                  <chakra.small>value</chakra.small>
                </Label>
              </HStack>
              <Flex
                justify="space-between"
                width="100%"
                align="center"
              >
                <HStack spacing={2}>
                  <Avatar size='xs' src={members[0]}  borderRadius='md'/>
                  <Avatar size='xs' src={members[1]} borderRadius='md'/>
                  <IconButton
                colorScheme='blue'
                size='xs'
                aria-label='Search database'
                icon={<FontAwesomeIcon icon={faPlus} size="lg" />}
              />
                </HStack>
                <HStack spacing={2}>
                  <CardInfo icon={faComment} value="1" />
                  <CardInfo icon={faPaperclip} value="5" />
                </HStack>
              </Flex>
            </CardCp>
          </ColumnContainer>
          <LargeButton>
          <chakra.small>Add another list</chakra.small>
          <FontAwesomeIcon icon={faPlus} />
        </LargeButton>  
        </ColumnContainer>
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

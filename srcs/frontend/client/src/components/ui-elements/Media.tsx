import React from "react";
import {
  chakra,
  Image,
  Stack,
  Heading,
  HStack,
  Avatar,
  Box,
  Button,
} from "@chakra-ui/react";
import { Board } from "../../context/ContextScheme";
import { Container } from "./Wrappers";
import { FaPlus, FaPaperclip, FaComment } from "react-icons/fa6";


interface CardInfoProps {
  value: string;
  icon: any;
}

interface CardFooterProps {}

interface ProfileCardProps {
  profile: {
    name: string;
    image: string;
    joined: string;
  };
}


export const CardInfo: React.FC<CardInfoProps> = ({ value, icon }) => {
  return (
    <div>
      <HStack spacing={1} color="#BDBDBD" alignItems={"center"}>
        <chakra.small>{icon}</chakra.small>
        <chakra.small color="#BDBDBD" fontSize="xs">
          {value}
        </chakra.small>
      </HStack>
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = () => {
  return (
    <Container variant="mdSpaceBetween">
      <HStack spacing={1}>
        <Button variant="primary">
          <FaPlus />
        </Button>
      </HStack>
      <HStack spacing={2}>
        <CardInfo icon={<FaPaperclip />} value={"0"} />
        <CardInfo icon={<FaComment />} value={"0"} />
      </HStack>
    </Container>
  );
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div>
      <HStack spacing={2} align="center">
        <Avatar size="sm" rounded="md" borderRadius="md" src={profile.image} />
        <Stack spacing={0}>
          <Heading size="xs">{profile.name}</Heading>
          <chakra.small color="gray.500">{profile.joined}</chakra.small>
        </Stack>
      </HStack>
    </div>
  );
};

interface CardCoverProps {
  image: string;
}

export const CardCover: React.FC<CardCoverProps> = ({ image }) => {
  return (
    <Box height="150px" borderRadius="lg" mx="auto" my={2} w="90%">
      <Image
        src={image}
        objectFit="cover"
        w="100%"
        h="100%"
        borderRadius="lg"
      />
    </Box>
  );
};
interface BoardCardProps {
  Board: Board;
}
export const BoardCard: React.FC<BoardCardProps> = ({ Board }) => {
  return (
    <Container variant="Card">
      <Stack spacing={2} justify="center" align="center">
        {Board.cover && <CardCover image={Board.cover} />}
        <Heading size="md" fontWeight="normal">
          {Board.title}
        </Heading>
      </Stack>
    </Container>
  );
};

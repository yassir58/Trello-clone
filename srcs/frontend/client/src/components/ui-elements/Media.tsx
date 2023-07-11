import React from "react";
import {
  chakra,
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  Flex,
  HStack,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { ColumnContainer } from "./Containers";
import { LargeButton, Label } from "./Buttons";
import AddCard from "../AddCard";
import ThreeDot from "../ThreeDot";
import { PopOver } from "../Popover";
import {BiPlus} from "react-icons/bi";
import {MdComment} from "react-icons/md";
import {BsPaperclip} from "react-icons/bs"
import {FaEllipsis} from "react-icons/fa6"
interface CardProps {
  card: {
    id: number;
    title: string;
    cardBanner?: string;
    tags?: Array<{ value: string; color: string }>;
    members?: Array<string>;
    commentCount?: number;
    attachmentCount?: number;
  };
}

interface CardInfoProps {
  value: string;
  icon: any;
}

interface CardListProps {
  cards?: Array<{
    id: number;
    title: string;
    cardBanner: string;
    tags: Array<{ value: string; color: string }>;
    members: Array<string>;
    commentCount: number;
    attachmentCount: number;
  }>;
}

const defaultCard = {
  id: 1,
  cardBanner: "",
  title: "",
  commentCount: 0,
  attachmentCount: 0,
  tags: [],
  members: [],
};

interface ProfileCardProps {
  profile:{
    name: string;
    image: string;
    joined: string;
  }
}

export const CardCp: React.FC<CardProps> = ({ card = defaultCard }) => {
  return (
    <div>
      <Card maxW="sm" w="98%" rounded="xl">
        <CardBody>
          <Image src={card.cardBanner} alt={card.title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="sm">{card.title}</Heading>
            <HStack spacing={2}>
              {card.tags &&
                card.tags.map((tag, index) => {
                  if (index < 3)
                    return <Label color={tag.color}>{tag.value}</Label>;
                })}
            </HStack>
            <Flex justify="space-between" width="100%" align="center">
              <HStack spacing={2}>
                {card.members &&
                  card.members.map((member, index) => {
                    if (index < 2)
                      return (
                        <Avatar
                          size="xs"
                          rounded="md"
                          borderRadius="md"
                          src={member}
                        />
                      );
                  })}
                <IconButton
                  colorScheme="blue"
                  size="xs"
                  aria-label="Search database"
                  icon={<BiPlus />}
                />
              </HStack>
              <HStack spacing={2}>
                <CardInfo icon={<MdComment/>} value={"12"} />
                <CardInfo icon={<BsPaperclip/>} value={"3"} />
              </HStack>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export const CardInfo: React.FC<CardInfoProps> = ({ value, icon }) => {
  return (
    <div>
      <HStack spacing={2} color="gray.400">
        <chakra.small>
          {icon}
        </chakra.small>
        <chakra.small color="gray.400" fontSize="xs">
          {value}
        </chakra.small>
      </HStack>
    </div>
  );
};

export const CardList: React.FC<CardListProps> = ({ cards = null }) => {
  const [createCard, setCreateCard] = React.useState(false);
  const createCardHandler = () => {
    setCreateCard(!createCard);
  };
  return (
    <div>
      <ColumnContainer>
        <Flex
          w="100%"
          position="relative"
          justify="space-between"
          align="center"
          p="6px"
        >
          <Heading size="sm" fontWeight="normal">
            This is list title
          </Heading>
          <PopOver
            icon={<FaEllipsis/>}
            buttonTheme={{ bg: "transparent", color: "gray.400" }}
            size="3xs"
          >
            <ThreeDot />
          </PopOver>
        </Flex>
        <ColumnContainer>
          {cards &&
            cards.map((item) => {
              return <CardCp card={item} />;
            })}
        </ColumnContainer>
        {createCard && <AddCard />}
        <LargeButton onClickHandler={createCardHandler}>
          <chakra.small>Add another Card</chakra.small>
          <BiPlus/>
        </LargeButton>
      </ColumnContainer>
    </div>
  );
};



export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div>
      <HStack spacing={2} align="center">
        <Avatar size='sm' rounded="md" borderRadius='md' src={profile.image} />
        <Stack spacing={0}>
          <Heading size="xs">{profile.name}</Heading>
          <chakra.small color="gray.500">{profile.joined}</chakra.small>
        </Stack>
      </HStack>
    </div>
  )
}
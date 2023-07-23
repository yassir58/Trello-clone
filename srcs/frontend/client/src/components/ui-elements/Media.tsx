import React from "react";
import {
  chakra,
  Image,
  Stack,
  Heading,
  Button,
  HStack,
  // IconButton,
  useDisclosure,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { ColumnContainer } from "./Containers";
import { Label } from "./Buttons";
import AddCard from "../AddCard";
import ThreeDot from "../ThreeDot";
import { EditCardComponent, ModalComponent, PopOver } from "../Popover";
import { BiPlus } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { FaEllipsis } from "react-icons/fa6";

export interface CardElementProps {
  id: number;
  title: string;
  cardBanner?: string;
  tags?: Array<{ value: string; color: string }>;
  members?: Array<string>;
  commentCount?: number;
  attachmentCount?: number;
}
export interface CardProps {
  card: CardElementProps;
  width?: string;
  boardCard?: boolean;
  height?: string;
  onClick?: () => void;
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
  profile: {
    name: string;
    image: string;
    joined: string;
  };
}

export const CardCp: React.FC<CardProps> = ({
  card = defaultCard,
  width = "260px",
  boardCard = false,
  onClick,
}) => {
  return (
    <div>
      <Box
        w={width}
        boxShadow="lg"
        borderRadius="lg"
        onClick={onClick}
        sx={{
          _hover: {
            boxShadow: "xl",
          },
        }}
      >
        <Stack justify="center" spacing={1}>
          {card.cardBanner && (
            <Box height="150px" borderRadius="lg" mx="auto" my={2} w="90%">
              <Image
                src={card.cardBanner}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="lg"
              />
            </Box>
          )}
          <Heading
            size={width === "2xs" ? "sm" : "md"}
            pl={4}
            pr={2}
            py={2}
            fontWeight="normal"
          >
            {card.title}
          </Heading>
          {boardCard && (
            <HStack spacing={2} px={4} py={2}>
              {card.tags &&
                card.tags.map((tag) => {
                  return <Label color={tag.color}>{tag.value}</Label>;
                })}
            </HStack>
          )}
          {boardCard ? (
            <HStack justify="space-between" px={2} py={3}>
              <HStack spacing={2} px={4} py={2}>
                {card.members &&
                  card.members.map((member, index) => {
                    if (index < 2) {
                      return (
                        <Avatar
                          size="xs"
                          borderRadius="lg"
                          name={member}
                          src={member}
                        />
                      );
                    }
                  })}
                <Button variant='primary'>
                  <BiPlus />
                </Button>
              </HStack>
              <HStack>
                <CardInfo
                  value={card.commentCount ? card.commentCount + "" : "0"}
                  icon={<MdComment />}
                />
                <CardInfo
                  value={card.attachmentCount ? card.attachmentCount + "" : "0"}
                  icon={<BsPaperclip />}
                />
              </HStack>
            </HStack>
          ) : (
            <HStack spacing={2} px={4} py={2}>
              {card.members &&
                card.members.map((member) => {
                  return (
                    <Avatar
                      size="sm"
                      borderRadius="lg"
                      name={member}
                      src="https://bit.ly/dan-abramov"
                    />
                  );
                })}
            </HStack>
          )}
        </Stack>
      </Box>
    </div>
  );
};

export const CardInfo: React.FC<CardInfoProps> = ({ value, icon }) => {
  return (
    <div>
      <HStack spacing={1} color="#BDBDBD">
        <chakra.small>{icon}</chakra.small>
        <chakra.small color="#BDBDBD" fontSize="xs">
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
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <ColumnContainer>
        <HStack
          mx="auto"
          justify="space-between"
          alignItems="center"
          py={2}
          w="100%"
          px={4}
        >
          <Heading
            size="sm"
            fontWeight="500"
            lineHeight="normal"
            color="#333"
            letterSpacing="-0.49px"
            fontFamily="Poppins"
          >
            This is list title
          </Heading>
          <PopOver
            button={<Button variant={'ghost'}><FaEllipsis/></Button>}
            size="3xs"
          >
            <ThreeDot />
          </PopOver>
        </HStack>

        {createCard ? (
          <AddCard cancelHandler={createCardHandler}/>
        ) : (
          <Button onClick={createCardHandler} variant='largePrimary'>
            <chakra.small>Add another Card</chakra.small>
            <BiPlus />
          </Button>
        )}

        <ColumnContainer>
          {cards &&
            cards.map((item) => {
              return (
                <Box>
                  <CardCp card={item} boardCard={true} onClick={onOpen} />
                  <ModalComponent
                    style={{ size: "2xl" }}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  >
                    <EditCardComponent onClose={onClose} card={item} />
                  </ModalComponent>
                </Box>
              );
            })}
        </ColumnContainer>
      </ColumnContainer>
    </div>
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

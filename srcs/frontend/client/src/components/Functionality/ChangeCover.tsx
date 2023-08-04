import {
  HStack,
  Stack,
  chakra,
  Heading,

} from "@chakra-ui/react";
import React, { useState, useContext, useEffect} from "react";
import { AvatarWrapper } from "../ui-elements/Wrappers";
import { Card, AppContext} from "../../context/ContextScheme";

import { SearchInput } from "../ui-elements/SearchInput";
export interface ChangeCoverProps {
  boardCover?:  boolean;
  boardCoverSetter?: React.Dispatch<React.SetStateAction<string>>;
  card?: Card;
  cards?: Card[];
  setCards?: React.Dispatch<React.SetStateAction<Card[]>>;
}

const setCoverPhoto = (
  photo: string,
  state: Card[],
  stateSetter: React.Dispatch<React.SetStateAction<Card[]>>,
  cardId: string
) => {
  const tmp: Card[] = state.slice();
  const index = tmp.findIndex((card) => card.id == cardId);
  tmp[index].cover = photo;
  console.log(tmp);
  stateSetter(tmp);
};


export const ChangeCover: React.FC<ChangeCoverProps> = ({
  boardCover = false ,
  boardCoverSetter,
  card,
  cards,
  setCards,
}) => {
  
  const [keyword, setKeyWord] = useState<string>("");
  const {coverPhotos} = useContext (AppContext)

  useEffect(() => {
    if (boardCover)
      boardCoverSetter && boardCoverSetter (coverPhotos![0])
  }, []);
  return (
    <div>
      <Stack spacing={2}>
        <Heading size="sm">Photo search</Heading>
        <chakra.small color="#BDBDBD" fontSize="xs">
          Search Unsplash for photos
        </chakra.small>
        <SearchInput state={keyword} stateSetter={setKeyWord} />
        <HStack w="98%" spacing={2} justify="center" flexWrap="wrap">
          {coverPhotos?.map((photo, index) => (
            <AvatarWrapper
              key={index}
              src={photo}
              variant="clickable"
              onClick={() => {
                boardCover ?
                boardCoverSetter && boardCoverSetter(photo) :
                setCoverPhoto(
                  photo,
                  cards || [],
                  setCards || (() => {}),
                  card?.id || ''
                );
              }}
            />
          ))}
        </HStack>
      </Stack>
    </div>
  );
};


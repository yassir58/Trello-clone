import {
  HStack,
  Stack,
  chakra,
  Heading,

} from "@chakra-ui/react";
import React, { useState, useContext} from "react";
import { AvatarWrapper } from "../ui-elements/Wrappers";
import { PhotosContext } from "../../providers/PhotosProvider";
import { SearchInput } from "../ui-elements/SearchInput";
import { Spinner } from "@chakra-ui/spinner";
export interface ChangeCoverProps {
  action: (photo: string) => void;
}




export const ChangeCover: React.FC<ChangeCoverProps> = ({
  action
}) => {
  
  const [keyword, setKeyWord] = useState<string>("");
  const {isLoading, photos, searchPhotos} = useContext (PhotosContext)
  
  return (
    <div>
      <Stack spacing={2}>
        <Heading size="sm">Photo search</Heading>
        <chakra.small color="#BDBDBD" fontSize="xs">
          Search Unsplash for photos
        </chakra.small>
        <SearchInput state={keyword} stateSetter={setKeyWord} action={searchPhotos}/>
        {
          isLoading ? <Spinner size="md"  thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" /> : (
            <HStack w="98%" spacing={2} justify="center" flexWrap="wrap">
          {photos?.map((photo, index) => (
            <AvatarWrapper
              key={index}
              src={photo}
              variant="clickable"
              onClick={()=>{
                action (photo)
              }}
            />
          ))}
        </HStack>
          )
        }
      </Stack>
    </div>
  );
};


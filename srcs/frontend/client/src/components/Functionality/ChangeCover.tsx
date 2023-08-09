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
import Loading from "../../pages/Loading";
export interface ChangeCoverProps {
  action: (photo: string) => void;
}




export const ChangeCover: React.FC<ChangeCoverProps> = ({
  action
}) => {
  
  const [keyword, setKeyWord] = useState<string>("");
  const {isLoading, photos, searchPhotos} = useContext (PhotosContext)
  if (isLoading)
   return <h3>Loading ...</h3>
  return (
    <div>
      <Stack spacing={2}>
        <Heading size="sm">Photo search</Heading>
        <chakra.small color="#BDBDBD" fontSize="xs">
          Search Unsplash for photos
        </chakra.small>
        <SearchInput state={keyword} stateSetter={setKeyWord} action={searchPhotos}/>
        {
          isLoading ? <Loading /> : (
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


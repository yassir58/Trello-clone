import React, { useState, useContext } from "react";
import { Stack, HStack, Button, Input, Text } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { EditCardCover } from "../ui-elements/EditCardCover";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { useMutation } from "react-query";
import { Board , AppContext} from "../../context/ContextScheme";
import {CoverPopOver} from "../Popover" 
import apiClient from "../../services/apiClient";
interface newBoardProps {
  action?: any;
  onClose: () => void;
}
interface BoardResponse {
  status:string,
  board:Board
}

export const NewBoard: React.FC<newBoardProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const { publicBoards, setPublicBoards } = useContext(AppContext);
  const [coverImage, setCoverImage] = useState<string>("");
  const createBoardClient = new apiClient<Board>("/boards");
  // Mutation hook call
  const newBoardMutation = useMutation({
    mutationFn: (newBoard: Board) => createBoardClient.postData(newBoard).then (res=>res.data),
    onSuccess: (data:BoardResponse) => {
      const tmpBoards = publicBoards?.slice();
      tmpBoards?.push(data.board);
      setPublicBoards && setPublicBoards(tmpBoards || []);
    },
    onError: (error) => console.log("error from mutation :", error),
  });


  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = () => {
    const newBoard: Board = {
      visibility: false,
      title: title,
      coverImage: coverImage,

    };
    newBoardMutation.mutate(newBoard);
  };

  if (newBoardMutation.isIdle) console.log("Mutation is Idle");

  return (
    <Stack spacing={4} justify="center">
      <CloseButton onClose={onClose} />
      <EditCardCover
        image={coverImage}
      />

      <Input
        variant="outline"
        placeholder="Add board title"
        w="96%"
        onChange={handleOnchange}
      />
      <HStack spacing={4} justifyContent="center">
      <CoverPopOver action={(photo:string)=>setCoverImage (photo)}/>
        <Button variant="secondary">
          <HStack spacing={3}>
            <FaUnlockKeyhole />

            <Text fontSize="md" fontWeight="normal">
              Private
            </Text>
          </HStack>
        </Button>
      </HStack>
      <HStack spacing={2} justifyContent="flex-end">
        <Button variant="ghostSecondary" onClick={onClose}>
          cancel
        </Button>
        <Button
          colorScheme="blue"
          mr={3}
          onClick={() => {
            handleOnSubmit();
            onClose();
          }}
          fontSize="md"
          fontWeight="normal"
        >
          <HStack spacing={1}>
            <BiPlus />
            <Text fontSize="md">create</Text>
          </HStack>
        </Button>
      </HStack>
    </Stack>
  );
};

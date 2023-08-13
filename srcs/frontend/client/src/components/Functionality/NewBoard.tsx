import React, { useState, useContext } from "react";
import { Stack, HStack, Button, Text, useToast, Skeleton } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { EditCardCover } from "../ui-elements/EditCardCover";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { Board, AppContext } from "../../context/ContextScheme";
import { CoverPopOver } from "../Popover";
import apiClient from "../../services/apiClient";
import { useSuccess, useFailure } from "../../hooks/useAlerts";
import {ControlledForm} from "../Forms/controlledForm"

interface newBoardProps {
  action?: any;
  onClose: () => void;
}
interface BoardResponse {
  status: string;
  board: Board;
}

export const NewBoard: React.FC<newBoardProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const { publicBoards, setPublicBoards } = useContext(AppContext);
  const [coverImage, setCoverImage] = useState<string>("");
  const createBoardClient = new apiClient<Board>("/boards");
  const toast = useToast();
  // Mutation hook call
  const newBoardMutation = useMutation({
    mutationFn: (newBoard: Board) => createBoardClient.postData(newBoard).then((res) => res.data),
    onSuccess: (data: BoardResponse) => {
      const tmpBoards = publicBoards?.slice();
      tmpBoards?.push(data.board);
      setPublicBoards && setPublicBoards(tmpBoards || []);
      toast(useSuccess("Board created successfully!"));
    },
    onError: (error: any) => {
      toast(useFailure(error.message));
    },
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

   
  return (
    <Stack spacing={4} justify="center">
      <Stack spacing={6}>
      <CloseButton onClose={onClose} />
      {coverImage ? <EditCardCover image={coverImage} /> : <Skeleton height='90px'/>}
      <ControlledForm placeholder="Add board title" handleOnchange={handleOnchange} action={handleOnSubmit} value={title} onClose={onClose}/>
      </Stack>
      <HStack spacing={4} justifyContent="center">
        <CoverPopOver action={(photo: string) => setCoverImage(photo)} />
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

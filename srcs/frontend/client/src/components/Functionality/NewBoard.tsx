import React, { useState } from "react";
import { Stack, HStack, Button, Input, Text } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { EditCardCover } from "../ui-elements/EditCardCover";
import { FaUnlockKeyhole, FaImage } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { useMutation } from "react-query";
import { createBoard } from "./createBoard";
import { Board } from "../../context/ContextScheme";
interface newBoardProps {
  action?: any;
  onClose: () => void;
}

export const NewBoard: React.FC<newBoardProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");

  const newBoardMutation = useMutation({
    mutationFn: createBoard,
  });
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = () => {
    
    const newBoard:Board = {
      private: false,
      title: title,
      cover: `https://source.unsplash.com/random?sig=${Math.random() + 1}`,
    }
    // action(title);
    // console.log  ('creating new board')
    newBoardMutation.mutate(newBoard);
  };

  return (
    <Stack spacing={4} justify="center">
      <CloseButton onClose={onClose} />
      <EditCardCover
        image={`https://source.unsplash.com/random?sig=${Math.random() + 1}`}
      />

      <Input variant='outline' placeholder="Add board title" w="96%" onChange={handleOnchange} />
      <HStack spacing={4} justifyContent="center">
        <Button variant="secondary">
          <HStack spacing={3}>
            <FaImage />

            <Text fontSize="md" fontWeight="normal">
              Cover
            </Text>
          </HStack>
        </Button>

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

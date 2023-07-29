import React, { useState } from "react";
import { Stack, HStack, Button, Input, Text } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";
import { EditCardCover } from "../ui-elements/EditCardCover";
import { FaUnlockKeyhole, FaImage } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
interface newBoardProps {
  action?: any;
  onClose: () => void;
}

export const NewBoard: React.FC<newBoardProps> = ({ action, onClose }) => {
  const [title, setTitle] = useState<string>("");

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = () => {
    action(title);
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

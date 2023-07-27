import React from "react";
import { HStack, chakra, Button } from "@chakra-ui/react";
import { BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AvatarWrapper } from "../ui-elements/Wrappers";

interface ProfileHeaderProps {}

export const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  return (
    <HStack spacing={3} color="gray.600">
      <AvatarWrapper
        variant="clickable"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <chakra.small color="gray.600" mx="10px">
        Javier lima
      </chakra.small>
      <Link to="/login">
        <Button variant="ghost">
          <BsCaretDownFill />
        </Button>
      </Link>
    </HStack>
  );
};

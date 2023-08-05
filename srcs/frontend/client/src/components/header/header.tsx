import React from "react";
import {HStack, Box, useDisclosure } from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { Nav } from "./Nav";
import ProfileMenu from "../Menu/ProfileMenu";
import BoardSearch from "../BoardSearch";
interface HeaderProps {
  profileModal: ReturnType<typeof useDisclosure>;
}



const Header = ({profileModal }: HeaderProps) => {

  return (
    <Box className="header">
      <Container variant="mdSpaceBetween">
        <HStack spacing={8}>
          <SmallLogo />
          <Nav />
        </HStack>
        <HStack spacing={5}>
          <BoardSearch />
          <ProfileMenu profileModal={profileModal}/>
        </HStack>
      </Container>
    </Box>
  );
};






export default Header;

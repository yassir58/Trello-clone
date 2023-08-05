import React from "react";
import {HStack, Box} from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { Nav } from "./Nav";
import { Board } from "../../context/ContextScheme";
import BoardSearch from "../BoardSearch";
<<<<<<< HEAD
import ProfileMenu from "../Menu/ProfileMenu";
export interface HeaderProps {
  Board:Board
}



const Header: React.FC<HeaderProps> = ({
  Board
}) => {
=======

const Header = () => {
>>>>>>> 070ec352f486f71ce8666053f3af00c5154fc22b
  return (
    <Box className="header">
      <Container variant="mdSpaceBetween">
        <HStack spacing={8}>
          <SmallLogo />
          <Nav Board={Board} />
        </HStack>
        <HStack spacing={5}>
          <BoardSearch />
          <ProfileMenu />
        </HStack>
      </Container>
    </Box>
  );
};






export default Header;

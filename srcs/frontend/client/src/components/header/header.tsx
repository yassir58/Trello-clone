import React from "react";
import {HStack, Box } from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { SearchForm } from "./SearchForm";
import {ProfileHeader} from './ProfileHeader'
import { Nav } from "./Nav";
import { Board } from "../../context/ContextScheme";
export interface HeaderProps {
  Board:Board
}



const Header: React.FC<HeaderProps> = ({
  Board
}) => {
  return (
    <Box className="header">
      <Container variant="mdSpaceBetween">
        <HStack spacing={8}>
          <SmallLogo />
          <Nav Board={Board} />
        </HStack>
        <HStack spacing={5}>
          <SearchForm />
          <ProfileHeader />
        </HStack>
      </Container>
    </Box>
  );
};






export default Header;

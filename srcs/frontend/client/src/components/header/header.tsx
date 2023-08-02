import React from "react";
import {HStack, Box } from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { SearchForm } from "./SearchForm";
import { Nav } from "./Nav";
import ProfileMenu from "../Menu/ProfileMenu";
interface HeaderProps {}



const Header: React.FC<HeaderProps> = () => {

  return (
    <Box className="header">
      <Container variant="mdSpaceBetween">
        <HStack spacing={8}>
          <SmallLogo />
          <Nav />
        </HStack>
        <HStack spacing={5}>
          <SearchForm />
          <ProfileMenu/>
        </HStack>
      </Container>
    </Box>
  );
};






export default Header;

import React from "react";
import {HStack, Box } from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { SearchForm } from "./SearchForm";
import {ProfileHeader} from './ProfileHeader'
import { Nav } from "./Nav";
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
          <ProfileHeader />
        </HStack>
      </Container>
    </Box>
  );
};






export default Header;

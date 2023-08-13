import React from "react";
import {HStack, Box} from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { Nav } from "./Nav";
import { Board } from "../../context/ContextScheme";
import BoardSearch from "../BoardSearch";
import ProfileMenu from "../Menu/ProfileMenu";
// import { DrawerCp } from "../ui-elements/Drawer";
// import FiMenu from "react-icons/fi";
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
        <HStack spacing={5} className="first">
          <BoardSearch />
          <ProfileMenu />
        </HStack>
        {/* <DrawerCp Board={Board} icon={<FiMenu/>}> */}

        {/* </DrawerCp> */}
      </Container>
    </Box>
  );
};






export default Header;

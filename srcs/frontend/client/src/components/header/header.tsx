import React, {useState, useEffect} from "react";
import {HStack, Box} from "@chakra-ui/react";
import "../../styles/app.scss";
import { Container } from "../ui-elements/Wrappers";
import {SmallLogo} from './SmallLogo'
import { Nav } from "./Nav";
import { Board } from "../../context/ContextScheme";
import BoardSearch from "../BoardSearch";
import ProfileMenu from "../Menu/ProfileMenu";
import { DrawerCp } from "../ui-elements/Drawer";
import { BiMenu } from "react-icons/bi";
import { Menu } from "../Menu";
export interface HeaderProps {
  Board?:Board
  BoardHeader:boolean
}



const Header: React.FC<HeaderProps> = ({
  Board,
  BoardHeader
}) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const BREAK_POINT = 1050
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  console.log (`screenWidth: ${screenWidth}`)
  return (
    <Box className="header">
      <Container variant="mdSpaceBetween">
        <HStack spacing={8}>
          <SmallLogo />
          {screenWidth > BREAK_POINT && BoardHeader &&  <Nav Board={Board! || {}}  />}
        </HStack>
        {screenWidth > BREAK_POINT && 
        <HStack spacing={5} className="first">
          <BoardSearch />
          <ProfileMenu />
        </HStack>}
        {screenWidth < BREAK_POINT &&  <DrawerCp variant="ghost"  icon={<BiMenu fontSize={'18px'}/>}> <Menu/> </DrawerCp>}
      </Container>
    </Box>
  );
};






export default Header;

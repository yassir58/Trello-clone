import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Heading,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useModel from "../../hooks/useModel";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { profileModal } = useModel();

  const handleLogout = () => {
    setAuth({ loggedIn: false, token: null, user: null });
    localStorage.removeItem("jwtToken");
    //! Still should make request to backend to logout
    navigate("/login");
  };

  return (
    <Menu variant="primary">
      <MenuButton
        variant="menuButton"
        as={Button}
        rightIcon={<AiFillCaretDown />}
      >
        <HStack>
          <Avatar
            height={9}
            width={9}
            borderRadius={9}
            bg="#BDBDBD"
            name={auth.user?.fullname}
            src={"http://localhost:5002/img/users/" + auth.user?.profileImage}
          />
          <Heading fontFamily="Poppins" fontSize={14}>
            {auth.user?.fullname}
          </Heading>
        </HStack>
      </MenuButton>
      <MenuList fontFamily="Poppins">
        <MenuItem onClick={() => profileModal.onOpen()}>Profile</MenuItem>
        <MenuItem>Invites</MenuItem>
        <MenuItem onClick={() => navigate("/")}>Boards</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;

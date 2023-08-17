import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useModel from "../../hooks/useModel";
import apiClient from "../../services/apiClient";
import { Stack, Button, HStack } from "@chakra-ui/react";
import { ProfileCard } from "../ui-elements/Media"
import { AiFillCaretDown } from "react-icons/ai";

export const MenuNavBar = () => {
  const usersClient = new apiClient("/users/logout");
  const [visible, setVisible] =  useState (false);
  const navigate = useNavigate();
  const {auth, setAuth } = useAuth();
  const { profileModal, inviteModal } = useModel();
  const handleLogout = () => {
    usersClient.postData({}).then(() => {
      setAuth({ loggedIn: false, token: null, user: null });
      localStorage.removeItem("jwtToken");
      navigate("/login");
    });
  };
  return (


    <Stack spacing={4}>
        <HStack justify={'space-between'}>
        <ProfileCard profile={auth?.user || {}} />
        <Button variant='ghost' onClick={() => setVisible(!visible)}><AiFillCaretDown /></Button>
        </HStack>
        {visible && 
        <Stack spacing={4}>
        <Button variant='ghost' width='100%' onClick={() => profileModal.onOpen()}>Profile</Button>
        <Button variant='ghost' width='100%' onClick={() => inviteModal.onOpen()}>Invites</Button>
        <Button variant='ghost' width='100%' onClick={() => navigate("/")}>Boards</Button>
        <Button variant='ghost' width='100%' onClick={handleLogout}>Logout</Button>
    </Stack>}
    </Stack>
    
  );
};

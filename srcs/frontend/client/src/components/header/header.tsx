import React from "react";
import { Flex, chakra, Avatar, HStack } from "@chakra-ui/react";
import "../../styles/app.scss";
import { SecondaryButton, PrimaryButton } from "../ui-elements/Buttons";
import { BsFillGrid3X3GapFill, BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
interface HeaderProps {}
interface NavProps {}
interface ProfileHeaderProps {}
interface SearchFormProps {}
interface LogoProps {}

const Header: React.FC<HeaderProps> = () => {
  return (

      <Flex 
       className="header"
        px={6}
        py={4}
        justify="space-between"
        align="center"
      >
        <HStack spacing={8}>
          <SmallLogo />
          <Nav />
        </HStack>
        <HStack spacing={5}>
          <SearchForm />
          <ProfileHeader />
        </HStack>
      </Flex>
  );
};

export const Nav: React.FC<NavProps> = () => {
  return (
    <Flex justify="space-between" align="center">
      <chakra.h3 px="5px">DevChallenges Board</chakra.h3>
      <chakra.div
        className="w-px h-10 bg-gray-300 m-3.5"
        width="1px"
        height="1.8rem"
        bg="gray.200"
        mx="1.5rem"
      ></chakra.div>
      <Link to="/AllBoards">
        <SecondaryButton>
          <BsFillGrid3X3GapFill />
          <chakra.small>All boards</chakra.small>
        </SecondaryButton>
      </Link>
    </Flex>
  );
};

export const SmallLogo: React.FC<LogoProps> = () => {
  return (
    <Link to="/">
      <Flex justify="space-between" align="center" p="2px">
        <svg
          width="32"
          height="29"
          viewBox="0 0 32 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V25C14 27.2091 12.2091 29 10 29H4C1.79086 29 0 27.2091 0 25V4Z"
            fill="#2F80ED"
          />
          <path
            d="M18 4C18 1.79086 19.7909 0 22 0H28C30.2091 0 32 1.79086 32 4V14C32 16.2091 30.2091 18 28 18H22C19.7909 18 18 16.2091 18 14V4Z"
            fill="#2F80ED"
          />
        </svg>
        <chakra.h3 fontSize="1.2rem" fontWeight="bold" px="5px">
          Thello
        </chakra.h3>
      </Flex>
    </Link>
  );
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  return (
    <HStack spacing={3} color="gray.600">
      <Avatar
        size="sm"
        borderRadius="md"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <chakra.small color="gray.600" mx="10px">
        Javier lima
      </chakra.small>
      <BsCaretDownFill />
    </HStack>
  );
};

export const SearchForm: React.FC<SearchFormProps> = () => {
  return (
    <div>
      <chakra.form
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        rounded="md"
        bg="white"
        color="gray.300"
        w="2xs"
        p="2px"
        boxShadow="base"
      >
        <chakra.input
          type="text"
          className="bg-transparent border-0 outline-none w-3/5 px-30"
          opacity="1"
          px="2px"
          py="2px"
          w="3/5"
          border="0"
          fontSize="xs"
          outline="none"
          placeholder={"keywords ..."}
          color="gray.600"
        />
        <PrimaryButton>
          <chakra.small>Search</chakra.small>
        </PrimaryButton>
      </chakra.form>
    </div>
  );
};

export default Header;

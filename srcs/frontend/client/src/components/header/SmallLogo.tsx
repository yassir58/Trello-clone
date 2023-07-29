import React from "react";
import { Flex, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface LogoProps {}
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
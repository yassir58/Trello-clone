import React from "react";
import {
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BiSolidUser } from "react-icons/bi";
import ButtonStack from "./ButtonStack";
import {SearchInput} from "./ui-elements/SearchInput";

interface InviteToBoard {
}
const InviteToBoard:React.FC<InviteToBoard> = () => {
  const [search, setSearch] = React.useState("");
  return (
    <Stack  justify={'center'} alignItems={'center'}>
      <Stack  py="10px"  spacing={1}>
        <Text fontSize={"12px"}>Invite to Board</Text>
        <Text fontSize={"12px"} color="gray">
          Search for people you want to invite
        </Text>
      </Stack>
        <SearchInput state={search} stateSetter={setSearch} />
        <Stack
          borderColor={"lightgray"}
          borderWidth={"1px"}
          borderRadius={"8px"}
          shadow={"md"}
          p={"12px"}
        >
          <ButtonStack
            onClick={[() => {}]}
            buttons={["User", "User", "User"]}
            style="ghost"
            width="228px"
            height="45px"
            spaceBetween="15px"
            Icons={[<BiSolidUser />, <BiSolidUser />, <BiSolidUser />]}
          />
        </Stack>
        <Button
          mx="auto"
          w={"74px"}
          h={"30px"}
          variant={"primary"}
          fontSize={"10px"}
        >
          Invite
        </Button>
    </Stack>
  );
};

export default InviteToBoard;

import React, { useState } from "react";
import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Center,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { FaPlus } from 'react-icons/fa';
import FormSearchInput from "./Forms/FormSearchInput";
import UserList from "./Lists/UserList";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { User } from "../context/ContextScheme";

export interface UserResponse {
  status: string;
  count: number;
  users: User[];
}

const AssignMember = () => {
  const [id, setId] = useState("");
  const toast = useToast({ position: "top-right", duration: 2000 });
  const queryClient = useQueryClient();
  const [searchText, setSearchText] = useState("");
  const userClient = new apiClient<UserResponse>("/users");
  const inviteClient = new apiClient("/invites");
  const { data, refetch } = useQuery<User[]>({
    queryKey: ["Users"],
    queryFn: () => userClient.getData(undefined, { search: searchText }).then((res) => res.data.users),
    retry: 1,
  });
  // Handle send request
  const handleSendInvite = () => {
    if (id)
      inviteClient
        .postData({ userId: id })
        .then(() => {
          queryClient.setQueriesData<User[]>(["Users"], (users) => users?.filter((user) => user.id !== id));
          setId("");
        })
        .catch(() => {
          toast({
            description: "Something went wrong",
            status: "error",
          });
        });
  };
  return (
    <Menu>
      <MenuButton as={Button} paddingY={2}>
        <Icon as={FaPlus} fontSize={15} />
      </MenuButton>
      <MenuList padding={4} borderRadius={12}>
        <Heading letterSpacing="-0.42px" color="#4F4F4F" fontSize="19px" fontFamily="Poppins" fontWeight={600}>
          Members
        </Heading>
        <Text marginY={2} letterSpacing="-0.42px" color="#828282" fontSize="16px" fontFamily="Poppins" fontWeight={400}>
          Assign members to this board
        </Text>
        <FormSearchInput
          placeholder="User..."
          width="300px"
          type="icon"
          ChangeCb={(e) => setSearchText(e.target.value)}
          ClickCb={refetch}
        />
        <UserList users={data || []} userId={id} onClick={(id) => setId(id)} />
        <Center marginTop={4}>
          <Button variant="generic" onClick={handleSendInvite}>
            Invite
          </Button>
        </Center>
      </MenuList>
    </Menu>
  );
};

export default AssignMember;

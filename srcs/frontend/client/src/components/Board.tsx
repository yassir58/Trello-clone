import React, { useState, useEffect } from "react";
import { chakra, HStack, Stack, Button } from "@chakra-ui/react";

import { DrawerCp } from "./ui-elements/Drawer";
import Visibility from "./Visibility";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import { EditBoard } from "./Functionality/EditBoard";
import { ChangeCover } from "./Functionality/ChangeCover";
import { AddList } from "./Functionality/AddCard";
import { List } from "../context/ContextScheme";
import { CardList } from "./CardList";
import { Container } from "./ui-elements/Wrappers";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { useMutation } from "react-query";
import { createList } from "./Functionality/createList";
import { useQuery, useQueryClient } from "react-query";
import { BACKEND_ENDPOINT, JWT } from "../data/DataFetching";
import { RemoveList } from "./Functionality/RemoveList";
interface BoardProps {
  BoardId: string;
}

interface BoardMenuBarProps {
  // BoarStateSetter:any
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({}) => {
  return (
    <Stack>
      <Container variant="mdSpaceBetween">
        <HStack spacing={3}>
          <PopOverWrapper triggerVariant="secondary" value={"Public"} icon={<BsGlobeEuropeAfrica />} size="2xs">
            <Visibility />
          </PopOverWrapper>

          <PopOverWrapper triggerVariant="primary" value={"Add"} icon={<BiPlus />} size="2xs">
            <ChangeCover />
          </PopOverWrapper>
          <EditBoard />
        </HStack>
        <DrawerCp header="Menu" value="Menu" icon={<FaEllipsis />} variant="secondary" />
      </Container>
    </Stack>
  );
};

export const Board: React.FC<BoardProps> = ({ BoardId }) => {
  const [lists, setLists] = useState<List[]>([]);
  const [addList, setAddList] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const handleToggle = () => setAddList(!addList);

  const newListMutation = useMutation({
    mutationFn: createList,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["lists", BoardId]);
      handleToggle();
    }
  });

  const removeListMutation = useMutation({
    mutationFn: RemoveList,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["lists", BoardId]);
      console.log (`list removed id: ${data}`)
    }
  });

  const { isLoading } = useQuery(
    ["lists", BoardId],
    async () => {
      const response = await fetch(`${BACKEND_ENDPOINT}/boards/${BoardId}/lists`, {
        method: "GET",
        headers: {
          credentials: "include",
          Authorization: `Bearer ${JWT}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    {
      staleTime: 30 * 60 * 1000, // 30 minutes in milliseconds
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("data from query :", data);
        setLists(data.lists);
      },
      onError: (error) => {
        console.log("error from query :", error);
      },
    }
  );

  const handleAddList = (title: string) => {
    newListMutation.mutate({ name: title, boardId: BoardId });
  };

  useEffect(() => {
      queryClient.invalidateQueries(["lists", BoardId]);
  },[])

  if (isLoading) return <div>Loading...</div>;
  return (
    <Stack mt="90px">
      <BoardMenuBar />
      <Container variant="boardStack">
        {lists.map((list: List, index: number) => {
          return <CardList list={list} mutation={removeListMutation} key={index} />;
        })}
        <Stack>
          {addList ? (
            <AddList cancelHandler={handleToggle} actionHandler={handleAddList} />
          ) : (
            <Button variant="largePrimary" onClick={handleToggle}>
              <chakra.small>Add another list</chakra.small>
              <BiPlus />
            </Button>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

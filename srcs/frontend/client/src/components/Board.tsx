import React, { useState, useEffect, useContext } from "react";
import { chakra, HStack, Stack, Button, useToast } from "@chakra-ui/react";
import { DrawerCp } from "./ui-elements/Drawer";
// import Visibility from "./Visibility";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import { EditBoard } from "./Functionality/EditBoard";
import { AddList } from "./Functionality/AddCard";
import { List, Board as BoardType, AppContext } from "../context/ContextScheme";
import { CardList } from "./CardList";
import { Container } from "./ui-elements/Wrappers";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { useMutation } from "react-query";
import { useQuery, useQueryClient } from "react-query";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useSuccess, useFailure } from "../hooks/useAlerts";
interface BoardProps {
  BoardId: string;
}

interface BoardMenuBarProps {
  Board?: BoardType;
  updateMutation?: any;
  deleteMutation?: any;
}

interface ListResponse {
  status: string;
  lists: List[];
  count: number;
}

interface BoardResponse {
  status: string;
  board: BoardType;
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({ Board, updateMutation, deleteMutation }) => {
  return (
    <Stack>
      <Container variant="mdSpaceBetween">
        <HStack spacing={3}>
          <PopOverWrapper triggerVariant="secondary" value={Board?.visibility ? 'private' : 'public'} icon={<BsGlobeEuropeAfrica />} size="2xs">
            {/* <Visibility mutation={updateMutation} Board={Board!} /> */}
          </PopOverWrapper>

          <PopOverWrapper triggerVariant="primary" value={"Add"} icon={<BiPlus />} size="2xs">
            <EditBoard />
          </PopOverWrapper>
          <EditBoard Board={Board} updateMutation={updateMutation} deleteMutation={deleteMutation} />
        </HStack>
        <DrawerCp header="Menu" value="Menu" icon={<FaEllipsis />} variant="secondary" />
      </Container>
    </Stack>
  );
};

export const Board: React.FC<BoardProps> = ({ BoardId }) => {
  const [lists, setLists] = useState<List[]>([]);
  const { publicBoards } = useContext(AppContext);
  const BoardTemp: BoardType | (() => BoardType) = publicBoards?.find((board) => board.id == BoardId) || {
    id: BoardId,
    title: "loading",
    description: "loading",
    visibility: true,
  };
  const [BoardInfo, setBoardInfo] = useState<BoardType>(BoardTemp);
  const [addList, setAddList] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const handleToggle = () => setAddList(!addList);
  const getListsClient = new apiClient(`/boards/${BoardId}/lists`);
  const boardInfoClient = new apiClient(`/boards/${BoardId}`);
  const deleteListClient = (listId:string) => new apiClient (`/boards/${BoardId}/lists/${listId}`)
  const navigate = useNavigate();
  const toast = useToast();


  useQuery({
    queryKey: ["board", BoardId],
    queryFn: () => boardInfoClient.getData(null).then((res) => res.data),
    refetchOnWindowFocus: false,
    onSuccess: (data: BoardResponse) => setBoardInfo(data.board),
    onError: (error:any) => toast (useFailure(error.message))
  });

  const { isLoading, refetch } = useQuery({
    queryKey: ["lists", BoardId],
    queryFn: () => getListsClient.getData(null).then((res) => res.data),
    refetchOnWindowFocus: false,
    onSuccess: (data:ListResponse) => setLists(data.lists),
    onError: (error:any) => toast (useFailure(error.message))
  });


  const newListMutation = useMutation({
    mutationFn: (list: List) => getListsClient.postData(list).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["lists", BoardId]);
      handleToggle();
      toast (useSuccess("List successfully created!"))
    },
    onError: (error:any) => {toast (useFailure(error.message))}
  });

  const removeListMutation = useMutation({
    mutationFn: (listId:string)=> deleteListClient(listId).deleteData().then((res) => res.data),
    onSuccess: () => {
      // queryClient.invalidateQueries(["lists", BoardId]);
      refetch();
      toast (useSuccess("List successfully deleted!"))
    },
    onError: (error:any) => {toast (useFailure(error.message))}
  });

  const updateBoardMutation = useMutation({
    mutationFn: (Board: BoardType) => boardInfoClient.updateData(Board, {}).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["board", BoardId]);
      toast(useSuccess("Board updated successfully!"));
    },
    onError: (error:any) => {toast (useFailure(error.message))}
  });

  const deleteBoardMutation = useMutation({
    mutationFn: () => boardInfoClient.deleteData().then((res) => res.data),
    onSuccess: () => {
      toast(useSuccess("Board deleted successfully!"));
      navigate("/");
    },
    onError: (error:any) => {toast (useFailure(error.message))}
  });

  

  const handleAddList = (title: string) => {
    newListMutation.mutate({ name: title, boardId: BoardId });
  };

  useEffect(() => {
    queryClient.invalidateQueries(["lists", BoardId]);
  }, []);

  if (isLoading) console.log("list are loading ...");
  return (
    <Stack mt="90px">
      <BoardMenuBar Board={BoardInfo} updateMutation={updateBoardMutation} deleteMutation={deleteBoardMutation} />
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

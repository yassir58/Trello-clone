import React, { useState, useEffect, useContext } from "react";
import { chakra, HStack, Stack, Button } from "@chakra-ui/react";
import { DrawerCp } from "./ui-elements/Drawer";
import Visibility from "./Visibility";
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
import { RemoveList } from "./Functionality/RemoveList";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
interface BoardProps {
  BoardId: string;
}

interface BoardMenuBarProps {
  Board?: BoardType;
  updateMutation?: any;
  deleteMutation?: any;
}

interface ListResponse {
  status:string,
  lists:List[],
  count:number
}

interface BoardResponse {
  status:string,
  board:BoardType
}

export const BoardMenuBar: React.FC<BoardMenuBarProps> = ({Board, updateMutation, deleteMutation}) => {
  return (
    <Stack>
      <Container variant="mdSpaceBetween">
        <HStack spacing={3}>
          <PopOverWrapper triggerVariant="secondary" value={"Public"} icon={<BsGlobeEuropeAfrica />} size="2xs">
            <Visibility />
          </PopOverWrapper>

          <PopOverWrapper triggerVariant="primary" value={"Add"} icon={<BiPlus />} size="2xs">
            <EditBoard />
          </PopOverWrapper>
          <EditBoard Board={Board} updateMutation={updateMutation} deleteMutation={deleteMutation}/>
        </HStack>
        <DrawerCp header="Menu" value="Menu" icon={<FaEllipsis />} variant="secondary" />
      </Container>
    </Stack>
  );
};

export const Board: React.FC<BoardProps> = ({ BoardId }) => {
  const [lists, setLists] = useState<List[]>([]);
  const {publicBoards} = useContext(AppContext)
  const BoardTemp:(BoardType | (() => BoardType)) = publicBoards?.find (board=>board.id == BoardId) || {id:BoardId, title:"loading", description:"loading", visibility:true}
  const [BoardInfo, setBoardInfo] = useState<BoardType>(BoardTemp);
  const [addList, setAddList] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const handleToggle = () => setAddList(!addList);
  const getListsClient = new apiClient <ListResponse> (`boards/${BoardId}/lists`)
  const newListClient = new apiClient ("/lists")
  const boardInfoClient = new apiClient (`/boards/${BoardId}`)
  const navigate = useNavigate ()
  // const deleteListClient = new apiClient<> ("")

  const newListMutation = useMutation({
    mutationFn: (list:List)=> newListClient.postData(list).then (res=>res.data),
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

  const updateBoardMutation = useMutation ({
    mutationFn:(Board:BoardType)=> boardInfoClient.updateData (Board,{}).then (res=>res.data),
    onMutate: (Board:BoardType)=>{console.log (` update board data ${Board}`)},
    onSuccess: (data)=>{
      console.log (data)
      queryClient.invalidateQueries (['board', BoardId]);
    }
  })

  const deleteBoardMutation = useMutation ({
    mutationFn:()=> boardInfoClient.deleteData ().then (res=>res.data),
    onSuccess:(data)=>{
      console.log (data)
      navigate ("/")
    }
  })
  useQuery ({
    queryKey:['board', BoardId],
    queryFn:()=> boardInfoClient.getData (null).then (res=>res.data),
    staleTime: 30 * 60 * 1000, // 30 minutes in milliseconds
    refetchOnWindowFocus: false,
    onSuccess: (data:BoardResponse) => {
      console.log("data from query :", data);
      setBoardInfo(data.board);
    },
    onError: (error)=>{
      console.log (`error when trying to get board ${BoardId} error ${error}`)
    }

  })

  const { isLoading } = useQuery(
    {
      queryKey:["lists", BoardId],
      queryFn:()=> getListsClient.getData(null).then (res=>res.data),
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
      <BoardMenuBar Board={BoardInfo} updateMutation={updateBoardMutation} deleteMutation={deleteBoardMutation}/>
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

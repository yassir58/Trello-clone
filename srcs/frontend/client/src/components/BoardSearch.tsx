import React, { useRef, useState } from "react";

import { Box, Divider, HStack, Heading, useStyleConfig } from "@chakra-ui/react";
import FormSearchInput from "./Forms/FormSearchInput";
import VisibiltyButton from "./ui-elements/VisibiltyButton";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import BoardList from "./Lists/BoardList";
import { Board } from "../context/ContextScheme";

export interface BoardsReponse {
  status: string;
  count: number;
  boards: Board[];
}

const BoardSearch = () => {
  const boardsClient = new apiClient<BoardsReponse>("/boards");
  const boxRef = useRef<HTMLDivElement>(null);
  const [visibility, setVisibilty] = useState(true);
  const [searchArea, setSearchArea] = useState(false);
  const [searchText, setsearchText] = useState("");
  const { data, refetch } = useQuery<BoardsReponse>({
    queryKey: ["boards"],
    queryFn: () => boardsClient.getData().then((res) => res.data),
  });

  const searchData = (data: Board[] | undefined) => {
    if (data)
      return data.filter(
        (item) =>
          item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) && item.visibility == visibility
      );
    return [];
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (boxRef.current && !boxRef.current.contains(document.activeElement)) {
        setSearchArea(false);
      }
    }, 200);
  };

  const styles = useStyleConfig("BoxStyle", { variant: "searchContainer" });
  return (
    <Box position="relative" onBlur={handleBlur} ref={boxRef}>
      <FormSearchInput
        placeholder="keyword..."
        width="400px"
        type="text"
        ChangeCb={(e) => setsearchText(e.target.value)}
        ClickCb={() => refetch()}
        FocusCb={() => setSearchArea(true)}
      />
      <Box __css={styles} visibility={searchArea ? "visible" : "hidden"}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading as="h6" fontWeight="400" color="#828282" fontFamily="Poppins" fontSize="19px" paddingBottom={2}>
            Search in
          </Heading>
          <VisibiltyButton onClick={(visibility) => setVisibilty(visibility)} />
        </HStack>
        <Divider />
        <BoardList data={searchText.length > 0 ? searchData(data?.boards) : []} />
      </Box>
    </Box>
  );
};

export default BoardSearch;
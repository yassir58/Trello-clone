import React from "react";
import { Box, Text, useStyleConfig } from "@chakra-ui/react";

import BoardListItem from "./BoardListItem";
import { Board } from "../../context/ContextScheme";

interface BoardListProps {
  data: Board[] | undefined;
}

const BoardList = ({ data: boards }: BoardListProps) => {
  const styles = useStyleConfig("BoxStyle", { variant: "ListContainer" });
  return (
    <Box __css={styles}>
      {boards && boards?.length > 0 ? (
        boards.map((item, index) => (
          <BoardListItem
            key={index}
            name={item.title}
            members={item.users?.length}
            image={item.coverImage}
            id={item.id}
            visibility={item.visibility}
          />
        ))
      ) : (
        <Text fontWeight="400" color="#828282" fontFamily="Poppins" paddingY={2}>
          No boards were found..
        </Text>
      )}
    </Box>
  );
};

export default BoardList;
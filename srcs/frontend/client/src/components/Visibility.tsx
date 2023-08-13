import React from "react";
import { Text, Stack, Wrap, Button} from "@chakra-ui/react";

import { MdPublic } from "react-icons/md";
import { MdLock} from "react-icons/md";
// import DescriptiveBtnStack from "./DescriptiveBtnStack";
import { Board } from "../context/ContextScheme";
// import { QueryClient } from "@tanstack/react-query"
interface VisibilityProps {
  Board?:Board
  mutation?:any
}

const Visibility:React.FC<VisibilityProps> = ({
  mutation
}) => {

 
  
  const setVisibility = (visibility:boolean) => {
    mutation.mutate({visibility:visibility})
  }
  return (
    <Stack
      spacing={"16px"}
      p={"12px"}
     
    >
      <Stack spacing={2}>
        <Text as={"b"} fontSize={"12px"} color={"#4f4f4f"}>
          Visibility
        </Text>
        <Text fontSize={"12px"} color={"#828282"}>
          Choose who can see this board
        </Text>
      </Stack>
     <Stack>
     <Button variant='largeGhost'  px={"12px"} onClick={()=>{
      setVisibility (false)
     }}>
          <Stack align={"start"}>
            <Wrap>
              <MdPublic color={"#4f4f4f"} fontSize={"12px"} />
              <Text color={"#4f4f4f"} fontSize={"12px"} as="b">
                Public
              </Text>
            </Wrap>
            <Text color={"#828282"} fontSize={"10px"}>
            Anyone on the internet can see this.
            </Text>
          </Stack>
        </Button>
        <Button variant='largeGhost'  px={"12px"} onClick={()=>{
      setVisibility (true)
     }}>
          <Stack align={"start"}>
            <Wrap>
              <MdLock color={"#4f4f4f"} fontSize={"12px"} />
              <Text color={"#4f4f4f"} fontSize={"12px"} as="b">
                Private
              </Text>
            </Wrap>
            <Text color={"#828282"} fontSize={"10px"}>
            Anyone on the internet can see this.
            </Text>
          </Stack>
        </Button>
     </Stack>
    </Stack>
  );
};

export default Visibility;

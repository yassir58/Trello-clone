import React from "react";
import { Wrap, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useComments } from "../hooks/useComments";
import { Card } from "../context/ContextScheme";
interface props {
  card:Card
}
const  CommentSection:React.FC<props> = ({card})=> {
  const [comment, setComment] = useState("");
  const {newCommentMutation} = useComments (card.id!)

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    setComment ('')
    newCommentMutation.mutate (comment)
  };

  return (
    <Wrap position={"relative"}>
      <Textarea
        resize={"none"}
        w="450px"
        h="104px"
        placeholder="Write a comment..."
        value={comment}
        onChange={handleCommentChange}
      ></Textarea>
      <Button
        position="absolute"
        top={2}
        right={2}
        zIndex="1"
        fontSize={"10px"}
        variant={"primary"}
        w={"72px"}
        h={"24px"}
        onClick={handleSubmit}
      >
        Comment
      </Button>
    </Wrap>
  );
}

export default CommentSection;

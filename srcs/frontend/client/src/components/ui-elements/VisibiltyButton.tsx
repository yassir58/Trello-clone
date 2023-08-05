import React, { useState } from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { IoMdLock } from "react-icons/io";
import { IoEarth } from "react-icons/io5";

interface ButtonProps {
  onClick: (visibility: boolean) => void;
}

const VisibiltyButton = ({ onClick }: ButtonProps) => {
  const [visibile, setVisible] = useState(false);
  return (
    <Button
      leftIcon={<Icon boxSize={4} as={visibile ? IoEarth : IoMdLock} />}
      variant="private"
      marginBottom={2}
      height="32px"
      width="120px"
      onClick={() => {
        setVisible(!visibile);
        onClick(visibile);
      }}
    >
      <Text width="60px">{visibile ? "Public" : "Private "}</Text>
    </Button>
  );
};

export default VisibiltyButton;

import React, {useState, useEffect, useRef} from "react";
import { Tag } from "@chakra-ui/react";
import { SmallCloseButton } from "../Functionality/CloseButton";

interface LabelProps {
  children: React.ReactNode;
  color: string;
  size?: string;
  action?: () => void;
  removable?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  color,
  children,
  size = "sm",
  action,
  removable = true,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleMouseOver = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  useEffect(() => {
    if (buttonRef.current) {
      const buttonElement = buttonRef.current;
      buttonElement.style.display = isButtonVisible ? "block" : "none";
    }
  }, [isButtonVisible]);
  return (
    <Tag
      bg={`${color}.100`}
      color={`${color}.600`}
      mx="2px"
      px={4}
      py={1}
      size={size}
      rounded="xl"
      fontSize="xs"
      outline="none"
      position="relative"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
     {removable && isButtonVisible && <SmallCloseButton onClose={action} ref={buttonRef}/>}
      {children}
    </Tag>
  );
};

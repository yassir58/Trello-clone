import React, { useRef, useState, useEffect } from "react";
import { CardInfo } from "./ui-elements/Media";
import { MdDescription } from "react-icons/md";
import {
  // Editable,
  EditableTextarea,
  // EditablePreview,
  HStack,
  Stack,
  Button,
  Avatar,
  Heading,
  FormControl,
  Textarea,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  ButtonGroup,
  Flex,
  useEditableControls,
  Input,
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { CloseIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import { User, Board } from "../context/ContextScheme";

import BoardSearch from "./BoardSearch";
import { MenuNavBar } from "./Menu/MenuNavBar";
interface MenuProps {
  Board?: Board;
}
export const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <Stack spacing={3}>
      <Stack spacing={12}>
        <MenuNavBar />
        <BoardSearch />
      </Stack>
    </Stack>
  );
};

interface MyEditableProps {
  defaultValue?: string;
  action?: (value: string) => void;
}
export const MyEditableTextarea: React.FC<MyEditableProps> = ({ defaultValue = "", action }) => {
  const [value, setValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <FormControl>
      <HStack spacing={6}>
        <CardInfo value="Description" icon={<MdDescription />} />
        <Button variant="outlineSecondary" onClick={() => setIsEditing(true)}>
          <HStack spacing={2}>
            <FaPen /> <Text fontSize="sm">Edit</Text>
          </HStack>
        </Button>
      </HStack>
      <Textarea
        ref={textareaRef}
        placeholder="Enter description ..."
        value={value}
        border="none"
        my={6}
        onChange={(e) => {
          handleChange(e);
        }}
        resize="none"
        overflow="hidden"
        height="auto"
      />
      {isEditing ? (
        <HStack spacing={4}>
          <Button
            variant="green"
            onClick={() => {
              action && action(value);
              setIsEditing(false);
            }}
          >
            save
          </Button>
          <Button variant={"ghost"} onClick={() => setIsEditing(false)}>
            cancel
          </Button>
        </HStack>
      ) : (
        ""
      )}
    </FormControl>
  );
};

export default EditableTextarea;

interface teamMemberProps {
  profile: User;
}

export const TeamMemberCard: React.FC<teamMemberProps> = ({ profile }) => {
  return (
    <div>
      <HStack justify="space-between">
        <HStack spacing={3}>
          <Avatar
            size="sm"
            rounded="md"
            borderRadius="md"
            name={profile.fullname}
            src={`http://localhost:5002/img/users/${profile.profileImage}`}
          />
          <Heading size="xs">{profile.fullname}</Heading>
        </HStack>
        {/* {? <chakra.small> admin </chakra.small> : <Button variant="outlineRed"> remove </Button>} */}
      </HStack>
    </div>
  );
};

interface EditableHeadingProps {
  fs?: string;
  defaultValue: string;
  action?: (value: string) => void;
}

export const EditableTitle: React.FC<EditableHeadingProps> = ({ defaultValue, action }) => {
  const [value, setValue] = useState<string>("");
  /* Here's a custom control */
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button
          onClick={() => {
            action && action(value);
          }}
        >
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} aria-label="" />
        </Button>
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} aria-label="" />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} aria-label="" />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      defaultValue={defaultValue}
      fontSize="2xl"
      isPreviewFocusable={false}
      display="flex"
      justifyContent={"space-between"}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      <Input
        as={EditableInput}
        sx={{
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            border: "none",
          },
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <EditableControls />
    </Editable>
  );
};

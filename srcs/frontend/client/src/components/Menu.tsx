import React, { useRef, useState, useEffect } from "react";
import { CardInfo, ProfileCard } from "./ui-elements/Media";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import {
  // Editable,
  EditableTextarea,
  Box,
  // EditablePreview,
  HStack,
  Stack,
  Button,
  Avatar,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

export const Menu: React.FC = () => {
  const profile = {
    name: "Nikola Tesla",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    joined: "on 4 July, 2021",
  };

  const members = [
    {
      name: "Nikola Tesla",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      admin: true,
    },
    {
      name: "Vladimir putin",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      admin: false,
    },
    {
      name: "Faouzi lakjaa",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      admin: false,
    },
  ];

  const editableRef = useRef<HTMLTextAreaElement | null>(null);

  const removeFocus = () => {
    if (editableRef.current) editableRef.current.blur();
  };
  return (
    <div>
      <Stack spacing={3} my="12px">
        <CardInfo value="Made by" icon={<BiSolidUserCircle />} />
        <ProfileCard profile={profile} />
      </Stack>

      <Stack spacing={3} my="12px">
        <CardInfo value="Description" icon={<MdDescription />} />
        <Box
          border="1px solid black"
          borderRadius="md"
          width="95%"
          p="15px"
          my="10px"
        >
          <MyEditableTextarea />
        </Box>
        <HStack spacing={3}>
          <Button borderRadius="xl" px={5} py={2} size="sm" colorScheme="green">
            Save
          </Button>
          <Button
            onClick={removeFocus}
            borderRadius="xl"
            px={5}
            py={2}
            size="sm"
            bg="transparent"
            fontWeight="normal"
            color="gray.500"
          >
            Cancel
          </Button>
        </HStack>
        <Stack spacing={4} w="95%" mx="auto" my="10px">
          <CardInfo value="Team" icon={<MdDescription />} />
          <Stack>
            {members.map((member) => {
              return <TeamMemberCard profile={member} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

interface MyEditableProps {
  // value: string;
}
const MyEditableTextarea: React.FC<MyEditableProps> = () => {
  const [value, setValue] = useState("");

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
      <FormLabel>Editable Textarea</FormLabel>
      <Textarea
        ref={textareaRef}
        value={value}
        border="none"
        sx={{
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            border: "none",
          },
        }}
        onChange={handleChange}
        resize="none"
        overflow="hidden"
        height="auto"
      />
    </FormControl>
  );
};

export default EditableTextarea;

interface teamMemberProps {
  profile: {
    name: string;
    image: string;
    admin: boolean;
  };
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
            src={profile.image}
          />
          <Heading size="xs">{profile.name}</Heading>
        </HStack>
        {profile.admin ? (
          <chakra.small> admin </chakra.small>
        ) : (
          <Button size="xs" colorScheme="red" variant="outline">
            {" "}
            remove{" "}
          </Button>
        )}
      </HStack>
    </div>
  );
};

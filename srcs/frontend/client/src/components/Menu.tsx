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
  Textarea,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  ButtonGroup,
  Flex,
  useEditableControls,
  Input
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import {CloseIcon, CheckIcon, EditIcon} from '@chakra-ui/icons'
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
        <Box border="1px solid black" borderRadius="md" width="95%" p="15px" my="10px">
          <MyEditableTextarea defaultValue={"Enter description ..."} />
        </Box>
        <HStack spacing={3}>
          <Button variant="green">Save</Button>
          <Button onClick={removeFocus} variant="ghostSecondary">
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
        <Button variant="outlineSecondary" onClick={()=>setIsEditing(true)}>
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
        <Button variant={'ghost'} onClick={()=>setIsEditing (false)}>
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
          <Avatar size="sm" rounded="md" borderRadius="md" src={profile.image} />
          <Heading size="xs">{profile.name}</Heading>
        </HStack>
        {profile.admin ? <chakra.small> admin </chakra.small> : <Button variant="outlineRed"> remove </Button>}
      </HStack>
    </div>
  );
};

interface EditableHeadingProps {
  fs?:string;
  defaultValue:string;
  action?:(value:string) => void
}


export const  EditableTitle:React.FC<EditableHeadingProps> = ({
  defaultValue,
  action
}) => {
  const [value, setValue] = useState<string> ("")
  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()


    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <Button onClick={()=>{
          action && action(value)
        }}>
        <IconButton  icon={<CheckIcon/> } {...getSubmitButtonProps()} aria-label=""/>
        </Button>
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} aria-label="" />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} aria-label="" />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign='center'
      defaultValue={defaultValue}
      fontSize='2xl'
      isPreviewFocusable={false}
      display='flex'
      justifyContent={'space-between'}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput}  sx={{
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            border: "none",
          },
        }} value={value} onChange={(e)=>setValue(e.target.value)}/>
      <EditableControls />
    </Editable>
  )
} 
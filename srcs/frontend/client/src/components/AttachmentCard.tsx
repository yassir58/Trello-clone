import React from "react";
import { Avatar, Button, HStack, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import useAttachements from "../hooks/useAttachements";
import axios from "axios";

interface props {
  attachement: any;
}
export const AttachementCard: React.FC<props> = ({ attachement }) => {
  const attachementPath = "http://localhost:5002/attachement";
  const { deleteAttachementMutation } = useAttachements(attachement.cardId);
  const toast = useToast();

  const handleDownload = async () => {
     await axios
      .get(`${attachementPath}/${attachement.path}`, {
        responseType: "blob", // Specify the response type as 'blob' to handle binary data
      })
      .then((res) => res.data)
      .then((blob) => {
        toast({
          title: "Downloading file ....",
          status: "info",
          duration: 1000,
          isClosable: false,
        });
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", attachement.path);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode!.removeChild(link);
      });
  };
  return (
    <HStack spacing={5}>
      <Avatar
        borderRadius={"12px"}
        size={"xl"}
        src={`${attachementPath}/${attachement.path}`}
        name={attachement.path.split(".")[1]}
      />
      <Stack flex={1} spacing={5}>
        <Stack spacing={3}>
          <Text>{attachement.createAt}</Text>
          <Heading>{attachement.title}</Heading>
        </Stack>
        <HStack>
          <Button variant="outline" onClick={handleDownload}>
            download
          </Button>
          <Button variant="outline" onClick={() => deleteAttachementMutation.mutate(attachement.id)}>
            delete
          </Button>
        </HStack>
      </Stack>
    </HStack>
  );
};

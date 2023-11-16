
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useSuccess, useFailure } from "./useAlerts";
import axios from "axios";
import { useState } from "react";

const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
export type newAttachementData = z.infer<typeof newAttachementSchema>;
type AttachementType = z.infer<typeof newAttachementSchema>;

export const newAttachementSchema = z.object({
    title: z.string().min(6, { message: "Display name must be over 6 characters long" }).max(50),
    attachement: z
      .any()
      .refine((files) => files?.length == 1, "Image is required.")
      .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        ".jpeg, .png and .pdf files are accepted."
      ),
  });

const useCreateAttachement = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors},
  } = useForm<newAttachementData>({
    resolver: zodResolver(newAttachementSchema),
  });

  return { handleSubmit, reset, register, errors};
};

export default useCreateAttachement;

export const useAttachementsUploader = (cardId:string)=>{

    const queryClient = useQueryClient ()
    const { handleSubmit, reset, register, errors } = useCreateAttachement();
    const [fileData, setFileData] = useState ('')
    const toast = useToast();

    const uploadMutation = useMutation ({
        mutationFn: async (formData: any) => await axios
        .post("http://localhost:5002/api/v1/attachements", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        onSuccess: () => {
            toast (useSuccess ("File uploaded successfully"))
            queryClient.invalidateQueries (['attachements', cardId])
        },
        onError: ()=> toast (useFailure ('Failed to upload file'))
    })
  
    const handleFileUpload = (selectedFile:any) => {
        if (selectedFile) {
          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            setFileData(fileReader.result as string);
          };
          fileReader.readAsDataURL(selectedFile);
        }
      };
    const SendFormData = (data: AttachementType) => {
      const formData = new FormData();
      formData.append("cardId", cardId);
      formData.append("title", data.title);
      formData.append("attachement", data.attachement[0]);
      handleFileUpload (data.attachement[0]);
      uploadMutation.mutate (formData)
    };

    return {handleSubmit, reset, register, errors, SendFormData, fileData}
}
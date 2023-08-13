import React, { createContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Card, Label as LabelType } from "../context/ContextScheme";
interface LabelsResponse {
  status: string;
  labels: LabelType[];
  count: number;
}

interface LabelContextProps {
  isLoading?: boolean;
  labels?: LabelType[];
  createLabel?: (label: LabelType) => void;
  deleteLabel?: (id:string) => void;
}
export const LabelsContext = createContext<LabelContextProps>({});

interface Props {
  children: React.ReactNode;
  card?: Card;
}
export const LabelsProvider: React.FC<Props> = ({ children, card }) => {
  const [labels, setLabels] = useState<LabelType[]>([]);
//   const queryClient = new QueryClient();

  const { isLoading, refetch } = useQuery({
    queryKey: ["labels", card?.id],
    queryFn: () =>
      labelsClient(card?.id || "")
        .getData()
        .then((res) => res.data),
    onSuccess: (data: LabelsResponse) => {
      console.log(`labels : ${data}`);
      setLabels(data.labels);
    },
  });

  const labelsClient = (id: string) => new apiClient(`/cards/${id}/labels`);
  const labelByIdClient = (id: string) => new apiClient(`/cards/${card?.id}/labels/${id}`)
  const labelsMutation = useMutation({
    mutationFn: (label: LabelType) =>
      labelsClient(card?.id || "")
        .postData(label)
        .then((res) => res.data),
    onSuccess: (data) => {
      console.log(`label added : ${data}`);
      refetch ()
    },
  });

  const deleteMutation = useMutation ({
    mutationFn:(id:string)=> labelByIdClient(id).deleteData ().then (res=>res.data),
    onSuccess:(data)=>{
        console.log (`label deleted : ${data}`)
        console.log (`card id ${card?.id}`)
        refetch ()
    }
  })
 

    const createLabel = (label: LabelType) => {
        labelsMutation.mutate(label);
    }
    const deleteLabel =(id:string)=>{
        deleteMutation.mutate (id)
    }
  return <LabelsContext.Provider value={{ isLoading, labels, createLabel, deleteLabel }}>{children}</LabelsContext.Provider>;
};

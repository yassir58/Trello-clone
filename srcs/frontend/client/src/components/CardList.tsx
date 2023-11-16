import React, { useState } from "react";
import { Box, Button, chakra, Stack, useToast, Heading, HStack } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import { List, Card } from "../context/ContextScheme";
import { Container } from "./ui-elements/Wrappers";
import { ListOptions } from "./ListOptions";
import AddCard from "./Functionality/AddCard";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { ModalCardWrapper } from "./ui-elements/Modal";
import { handleFocus } from "./Functionality/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { LabelsProvider } from "../providers/LabelsProvider";
import { useFailure, useSuccess } from "../hooks/useAlerts";
import { ControlledForm } from "./Forms/controlledForm";
import { BiCheck, BiX } from "react-icons/bi";
// import {useSuccess, useFailure} from '../hooks/useAlerts'
interface CardListProps {
  // Board:Board,
  list: List;
  mutation: any;
}

interface cardsRespose {
  status: string;
  count: number;
  cards: Card[];
}

interface cardUpdate {
  id: string;
  card: Card;
}

interface ListResponse {
  status: string;
  newList: List;
}

export const CardList: React.FC<CardListProps> = ({ list, mutation }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [listTitle, setListTitle] = useState<string>(list.name || "");
  const [createCard, setCreateCard] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [editList, setEditList] = useState(false);
  const newCardClient = new apiClient(`/lists/${list.id}/cards`);
  const allCardsClient = new apiClient<cardsRespose>(`/lists/${list.id}/cards`);
  const listClient = new apiClient (`/lists/${list.id}`)
  const queryClient = useQueryClient();
  const ByIdCardClient = (id: string) => new apiClient(`/cards/${id}`);
  const toast = useToast();

  const createCardToggler = () => {
    setCreateCard(!createCard);
  };
  const handleRemoveList = () => {
    mutation.mutate(list.id);
  };

  const newCardMutation = useMutation({
    mutationFn: (card: Card) => newCardClient.postData(card).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cards", list.id]);
      toast(useSuccess("Card created successfully!"));
    },
    onError: () => {toast(useFailure("Failed to create card!"))}
  });

  const deleteCardMutation = useMutation({
    mutationFn: (card: Card) =>
      ByIdCardClient(card.id || "")
        .deleteData()
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cards", list.id]);
      toast(useSuccess("Card deleted successfully!"));
    },
    onError: () => {toast(useFailure("Failed to delete card!"))}
  });

  const updateCardMutation = useMutation({
    mutationFn: (obj: cardUpdate) =>
      ByIdCardClient(obj.id)
        .updateData(obj.card, {})
        .then((res) => res.data),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["card", res.card.id]);
      toast(useSuccess("Card updated successfully!"));
    },
    onError: () => {toast(useFailure("Failed to update card!"))}
  });

  const updateListMutation = useMutation({
    mutationFn: (list: List) =>
      listClient.updateData(list, {}).then((res) => res.data),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["list", res.newList.id]);
      toast(useSuccess("List updated successfully!"));
    },
    onError: () => {toast(useFailure("Failed to update list title!"))}
  });



  const { isLoading } = useQuery({
    queryKey: ["cards", list.id],
    queryFn: () => allCardsClient.getData().then((res) => res.data),
    onSuccess: (data) => {
      console.log(`card lists: ${data}`);
      setCards(data.cards);
    },
  });

  useQuery ({
    queryKey: ["list", list.id],
    queryFn: () => listClient.getData().then((res) => res.data),
    onSuccess: (data:ListResponse) => {
      setListTitle(data.newList.name || "");
    }
  })

  const updateList = () => {
    const newList: List = {
      name: listTitle,
    };
    updateListMutation.mutate(newList);
    setEditList(false);
  };

  if (isLoading) console.log("list are loading ..");

  return (
    <div>
      <Stack>
        {!editList ? (
          <Container variant="mdSpaceBetween">
            <Heading variant="listTitle">{listTitle}</Heading>
            <PopOverWrapper triggerVariant={"ghost"} icon={<FaEllipsis />} closable={true} size="3xs">
              <ListOptions removeList={() => handleRemoveList()} editMode={(state: boolean) => setEditList(state)} />
            </PopOverWrapper>
          </Container>
        ) : (
          <Stack>
            <ControlledForm
              placeholder="New list title"
              handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setListTitle(e.target.value);
              }}
              value={listTitle}
              action={updateList}
            />
            <HStack justify={"end"} px={6}>
              <Button onClick={() =>{
                
                setEditList(false)}} variant="green">
                <BiCheck fontSize={"16px"} />
              </Button>
              <Button onClick={() => setEditList(false)} variant="outlineRed">
                <BiX  fontSize={"16px"}/>
              </Button>
            </HStack>
          </Stack>
        )}

        {createCard ? (
          <AddCard
            cancelHandler={createCardToggler}
            placeholder="Add card title"
            actionHandler={(title: string) => {
              const newCard: Card = {
                title: title,
                listId: list?.id || "",
              };
              newCardMutation.mutate(newCard);
            }}
          />
        ) : (
          <Button
            onClick={() => {
              createCardToggler();
              handleFocus(inputRef);
            }}
            variant="largePrimary"
          >
            <chakra.small>Add another Card</chakra.small>
            <BiPlus />
          </Button>
        )}

        <Container variant="listStack" className="scrollable-container">
          {cards &&
            cards.map((item: Card, index: number) => {
              return (
                <LabelsProvider card={item}>
                  <Box>
                    <ModalCardWrapper
                      card={item}
                      id={index}
                      key={index}
                      deleteMutation={deleteCardMutation}
                      updateMutation={updateCardMutation}
                    />
                  </Box>
                </LabelsProvider>
              );
            })}
        </Container>
      </Stack>
    </div>
  );
};

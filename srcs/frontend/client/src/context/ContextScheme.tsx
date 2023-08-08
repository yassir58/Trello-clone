import React, { createContext, useState } from "react";
import { useQuery } from "react-query";
interface Props {
  children: React.ReactNode;
}

export interface Boards {
  state: Board[];
  setState: React.Dispatch<React.SetStateAction<Board[]>>;
}
export interface User {
  id: string;
  userName?: string;
  Boards?: Boards;
  Comments?: Comment[];
  profilePicture?: string;
  email?: string;
 
}

interface Comment {
  id: string;
  text: string;
  createdAt: string;
  editedAt: string;
  cardId: string;
  userId: string;
}
interface Attachment {
  id: String;
  title: String;
  path: String;
  createdAt: string;
  updatedAt: string;
  cardId: string;
}
interface Checklist {}

export interface List {
  id?: string;
  name: string;
  creationDate?: string;
  updateDate?: string;
  boardId: string;
}

export interface Label {
  value: string;
  color: string;
}
export interface Card {
  id?: string;
  title: string;
  description?: string;
  cover?: string;
  members?: User[];
  labels?: Label[];
  comments?: Comment[];
  attachments?: Attachment[]; // not the correct type but will do for now
  checklists?: Checklist[]; // not the correct type but will do for now
  creationDate?: string;
  editDate?: string;
  listId: string;
  BoardId?: string;
}

export interface Board {
  id?: string;
  title: string;
  coverImage?: string | null;
  visibility: boolean;
  authorId?: string;
  createdAt?: string;
  updatedAt?: string;
  users?:User[];
  description?: string;
}
export interface GlobalContext {
  LogedInUser?: User | null;
  PublicBoards?: {
    state?: Board[] | null;
    setState?: React.Dispatch<React.SetStateAction<Board[]>> | null;
  } | null;
  Users?: User[] | null;
}
export interface GlobalState {
  publicBoards?: Board[];
  setPublicBoards?: React.Dispatch<React.SetStateAction<Board[]>>;
  coverPhotos?: string[];
}
export const AppContext = createContext<GlobalState>({});

export const GlobalContext: React.FC<Props> = ({ children }) => {
  const [coverPhotos, setCoverPhotos] = useState<string[]>([]);
  const count = 12;
  const API_KEY = process.env.REACT_APP_API_KEY 
  const UNSPLASH_ENDPOINT = process.env.REACT_UNSPLASH_ENDPOINT

  console.log ('API_KEY',API_KEY)
  console.log ('UNSPLASH_ENDPOINT',UNSPLASH_ENDPOINT)
  const [publicBoards, setPublicBoards] = useState<Board[]>([]);
  const { isLoading } = useQuery(
    "coverQuery",
    async () => {
      const res = await fetch(
        `${UNSPLASH_ENDPOINT}photos/random/?client_id=${API_KEY}&count=${count}`
      );

      const photos = await res.json();
      return photos;
    },
    {
      staleTime: 25 * 60 * 1000,
      onSuccess: (data) => {
        const tmp: string[] = [];
        data.forEach((element: any) => {
          tmp.push(element.urls.small);
        });
        setCoverPhotos(tmp);
      },
      onError: (error) => {
        console.log("error from query :", error);
      },
    }
  );

  if (isLoading) console.log("cover loading ...");

  return (
    <div>
      <AppContext.Provider
        value={{ publicBoards, setPublicBoards, coverPhotos }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export interface Boards {
  state: Board[];
  setState: React.Dispatch<React.SetStateAction<Board[]>>;
}
export interface User {
  id: string;
  fullname: string;
  profileImage: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  Comments?: Comment[];
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
  id?:string;
  tag: string;
  color: string;
}
export interface Card {
  id?: string;
  title: string;
  description?: string;
  coverImage?: string;
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
  description?: string;
  users?:User[];
  author?: User;
  authorId?: string;
  createdAt?: Date;
  updatedAt?: Date;
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
}
export const AppContext = createContext<GlobalState>({});

export const GlobalContext: React.FC<Props> = ({ children }) => {
  const [publicBoards, setPublicBoards] = useState<Board[]>([]);
  
  return (
    <div>
      <AppContext.Provider
        value={{ publicBoards, setPublicBoards}}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

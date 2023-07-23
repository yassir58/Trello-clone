import React from "react";
import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface User {
  state: {
    id: number;
    userName: string;
    Boards: Board[];
    Comments: Comment[];
    profilePicture?: string;
    email: string;
  };
  setState: React.Dispatch<React.SetStateAction<{}>>;
}

interface Comment {
    state:{
        id: number;
        text: string;
        createdAt: string;
        editedAt: string;
        cardId: number;
        userId: number
    }
}
interface Attachment {
    state: {
        id :String; 
        title :String; 
        path  :String ;
        createdAt : string;
        updatedAt: string;
        cardId     :number;
    }
    setState: React.Dispatch<React.SetStateAction<{}>>;
}
interface Checklist {}

interface List {
  state: {
    id: number;
    title: string;
    cards: Card[];
    creationDate: string;
    editDate: string;
    boardId: number;
  };
  setState: React.Dispatch<React.SetStateAction<{}>>;
}

interface Card {
  state: {
    id: number;
    title: string;
    description: string;
    cover?: string;
    members: User[];
    labels: string[];
    comments: Comment[];
    attachments: Attachment[]; // not the correct type but will do for now
    checklists: Checklist[]; // not the correct type but will do for now
    creationDate: string;
    editDate: string;
    listId: number;
    BoardId: number;

  };
  setState: React.Dispatch<React.SetStateAction<{}>>;
}



interface Board {
  state: {
    id: number;
    title: string;
    cover?: string;
    private: boolean;
    members: User[];
    lists: List[];
    Owner: User;
    OwnerId: number;
    creationDate: string;
    editDate: string;
  };
  setState: React.Dispatch<React.SetStateAction<{}>>;
}

export interface GlobalContext {
  LogedInUser: User;
  PublicBoards: Board[];
  Users: User[];
}

const BoardsContext = createContext({});

export const BoardList: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <BoardsContext.Provider value={"divk"}>{children}</BoardsContext.Provider>
    </div>
  );
};

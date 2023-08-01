import React, { createContext} from "react";

interface Props {
  children: React.ReactNode;
}

export interface Boards {
  state: Board[];
  setState: React.Dispatch<React.SetStateAction<Board[]>>;
}
export interface User {
 state: {
  id: number;
  userName: string;
  Boards: Boards;
  Comments: Comment[];
  profilePicture?: string;
  email: string;
} | null;
  setState?: any;
}

interface Comment {
  id: number;
  text: string;
  createdAt: string;
  editedAt: string;
  cardId: number;
  userId: number;
}
interface Attachment {
  id: String;
  title: String;
  path: String;
  createdAt: string;
  updatedAt: string;
  cardId: number;
}
interface Checklist {}

export interface List {
  id: number;
  title: string;
  cards: Card[];
  creationDate: string;
  editDate: string;
  boardId: number;
}

export interface Label {
  value: string;
  color: string;
}
export interface Card {
  id: number;
  title: string;
  description?: string;
  cover?: string;
  members?: User[];
  labels?: Label[];
  comments?: Comment[];
  attachments?: Attachment[]; // not the correct type but will do for now
  checklists?: Checklist[]; // not the correct type but will do for now
  creationDate: string;
  editDate: string;
  listId: number;
  BoardId: number;
}

export interface Board {
    id?: number;
    title: string;
    cover?: string;
    private: boolean;
    members?: User[];
    lists?: List[];
    Owner?: User;
    OwnerId?: number;
    creationDate?: string;
    editDate?: string;
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

}
export const AppContext = createContext<GlobalState>({});

export const GlobalContext: React.FC<Props> = ({ children }) => {
  // const [publicBoards, setPublicBoards] = useState<Board[]>([]);
  // const [userBoards, setUserBoards] = useState<Board[]>([]);
  // const [LogedInUser, setLogedInUser] = useState<User['state'] | null>(null);
  // const [globalState, setGlobalState] = useState<GlobalContext>({
  //   LogedInUser: null,
  //   PublicBoards: null,
  //   Users: null,
  // });

 
  
  return (
    <div>
      <AppContext.Provider value={{}}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

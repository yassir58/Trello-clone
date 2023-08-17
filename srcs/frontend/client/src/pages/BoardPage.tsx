import React, { useContext, 
useEffect,
useState 
} from "react";
import Header from "../components/header/header";
import { Board } from "../components/Board";
import { AppContext } from "../context/ContextScheme";
import { Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";
import ProfileSettings from "../components/ProfileSettings";
import useModel from "../hooks/useModel";
import Invites from "../components/Invites";
interface HomeProps {}

export const BoardPage: React.FC<HomeProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const { profileModal, inviteModal } = useModel();
  const { auth } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  if (loading) return <Loading />
  if (!auth.loggedIn) return <Navigate to="/login" />;
  const { id } = useParams<{ id: string }>();
  const { publicBoards } = useContext(AppContext);

  const board = publicBoards?.find((board) => board.id == id);
  console.log(`Board id : ${id}`);
  return (
    <Stack spacing={3}>
      <Header Board={board! || {}} BoardHeader={true} />
      <Board BoardId={id || ""} />
      <ProfileSettings open={profileModal.isOpen} onClose={profileModal.onClose} />
      <Invites open={inviteModal.isOpen} onClose={inviteModal.onClose} />
    </Stack>
  );
};

// import React, { useEffect, useState } from "react";
// import Header from "./header/header";
// import { Board } from "./Board";
// import { Stack } from "@chakra-ui/react";
// import useAuth from "../hooks/useAuth";
// import { Navigate } from "react-router-dom";
// import Loading from "../pages/Loading";
// import ProfileSettings from "./ProfileSettings";
// import useModel from "../hooks/useModel";

// interface HomeProps {}

// export const Home: React.FC<HomeProps> = ({}) => {
//   const [loading, setLoading] = useState(true);
//   const { profileModal } = useModel();
//   const { auth } = useAuth();
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false)
//     }, 1000);
//   }, []);

//   if (loading) return <Loading />
//   if (!auth.loggedIn) return <Navigate to="/login" />;
//   return (
//     <Stack spacing={3}>
//       <Header />
//       <Board />
//       <ProfileSettings open={profileModal.isOpen} onClose={profileModal.onClose} />
//     </Stack>
//   );
// };

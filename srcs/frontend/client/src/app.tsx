import * as React from "react";
import { BoardPage } from "./pages/BoardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllBoards } from "./pages/AllBoards";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalContext } from "./context/ContextScheme";
import { ReactQueryDevtools } from "react-query/devtools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthProvider from "./providers/AuthProvider";
import ModelsProvider from "./providers/ModalsProvider";

interface IAppProps {}

const router = createBrowserRouter([
  {
    path: '/boards/:id',
    element: <BoardPage />
  },
  {
    path: '/',
    element: <AllBoards />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword/:token",
    element: <ResetPassword />,
  },
]);


const queryClient = new QueryClient();

const App: React.FunctionComponent<IAppProps> = () => {
  console.log(router);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModelsProvider>
          <GlobalContext>
            <RouterProvider router={router} />
          </GlobalContext>
        </ModelsProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

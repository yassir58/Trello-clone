import * as React from "react";
import { Home } from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllBoards } from "./components/AllBoards";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalContext } from "./context/ContextScheme";
import { ReactQueryDevtools } from "react-query/devtools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthProvider from "./providers/AuthProvider";

interface IAppProps {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AllBoards",
    element: <AllBoards />,
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
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalContext>
          <RouterProvider router={router} />
        </GlobalContext>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

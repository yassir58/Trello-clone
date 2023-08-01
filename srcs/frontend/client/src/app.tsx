import * as React from 'react';
import { Home } from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllBoards } from './components/AllBoards';
import LoginForm from './components/Pages/LoginForm';
import RegisterForm from './components/Pages/RegisterForm';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalContext } from './context/ContextScheme';
import { ReactQueryDevtools } from 'react-query/devtools';

interface IAppProps {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/AllBoards',
    element: <AllBoards />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path:'/signup',
    element:<RegisterForm/>
  }

]);

const queryClient = new QueryClient();

const App: React.FunctionComponent<IAppProps> = () => {
  return (
   <QueryClientProvider client={queryClient}>
    <GlobalContext>
    <RouterProvider router={router}/>
    </GlobalContext>
    <ReactQueryDevtools />
   </QueryClientProvider>
  );
};

export default App;

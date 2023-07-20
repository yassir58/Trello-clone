import * as React from 'react';
import { Home } from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllBoards } from './components/AllBoards';
import LoginForm from './components/Pages/LoginForm';
import RegisterForm from './components/Pages/RegisterForm';

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

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

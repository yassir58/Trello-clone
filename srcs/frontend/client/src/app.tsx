import * as React from 'react';
import { Home } from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllBoards } from './components/AllBoards';
interface IAppProps {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/AllBoards',
    element: <AllBoards />
  }
]);

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

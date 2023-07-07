import * as React from 'react';
import { Home } from './components/Home';


interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <Home/>
  );
};

export default App;

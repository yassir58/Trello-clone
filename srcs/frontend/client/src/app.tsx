import * as React from 'react';
import ProjectsPage from './components/projectPage';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div>
        <ProjectsPage/>
    </div>
  );
};

export default App;

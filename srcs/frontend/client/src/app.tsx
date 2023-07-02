import * as React from 'react';
import Header from './components/header/header';
import BoardNav from './components/boardNav/BoardNav';
import BoardSection from './components/BoardSection';
import CardList from './components/CardList';
import Card from './components/Card';
import AddItemButton from './components/AddItemBUtton';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div>
        <Header/>
        <BoardNav />
        <BoardSection>
          <CardList cardListTitle="First card list ">
            <Card/>
          </CardList>
          <CardList cardListTitle="Second card list ">
          </CardList>
          <AddItemButton value="Add another list"/>
        </BoardSection>
    </div>
  );
};

export default App;

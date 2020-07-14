import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import EntryChat from './pages/EntryChat';
import RoomList from './pages/Room/List';
import RoomNew from './pages/Room/New';

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
        <Layout>
          <Route exact path='/' component={EntryChat} />
          <Route exact path='/rooms' component={RoomList} />
          <Route exact path='/rooms/register'  component={RoomNew} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

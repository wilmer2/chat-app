import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './layout';
import EntryChat from './pages/EntryChat';
import RoomList from './pages/Room/List';
import RoomNew from './pages/Room/New';
import UserList from './pages/User/List';
import ChatList from './pages/Chat/List';
import ChatNew from './pages/Chat/New';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Switch>
          <Layout>
            <Route exact path='/' component={EntryChat} />
            <Route exact path='/rooms' component={RoomList} />
            <Route exact path='/rooms/register'  component={RoomNew} />
            <Route exact path='/users'  component={UserList} />
            <Route exact path='/chats' component={ChatList} />
            <Route exact path='/chats/new' component={ChatNew} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

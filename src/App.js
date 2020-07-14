import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import EntryChat from './pages/EntryChat';

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
        <Layout>
          <Route exact path='/' component={EntryChat} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';


import './App.css';

import Layout from './components/layout/Layout'
import DisplayLinks from './components/links/DisplayLinks'
import News from './components/news/News'
import MainPage from './components/main-page/MainPage'


function App() {
  return (
   
    <BrowserRouter>
      <Layout>
      <Switch >
        <Route exact path="/" component={MainPage} />
        <Route exact path="/links" component={DisplayLinks} />
        <Route exact path="/news" component={News} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
      </Layout>
    </BrowserRouter>
  
  );
}

export default App;

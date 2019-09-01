import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
import SongList from './components/SongList.js';
import SongCreate from './components/SongCreate.js';
import SongDetail from './components/SongDetail.js';

const client = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <Router history={hashHistory}>
              <Route path="/" component={App}>
                  <IndexRoute component={SongList}/>
                  <Route path="songs/new" component={SongCreate}/>
                  <Route path="songs/:id" component={SongDetail}/>
              </Route>
          </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

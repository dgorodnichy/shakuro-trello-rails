import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { hashHistory, Router, Route, Link, IndexRoute } from 'react-router';
import App from './containers/App.js'
import Board from './components/Board.js'

const store = configureStore()

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Board} />
    <Route path="board/:boardId" component={Board} />
  </Route>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, document.getElementById('root')
)

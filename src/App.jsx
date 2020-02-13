import React from 'react'
import { history } from './configureStore'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Header from './components/Header'

import './App.css'

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/">
        <Header />
        <h1>Hello from Ukraine</h1>
      </Route>
    </Switch>
  </ConnectedRouter>
)

export default App
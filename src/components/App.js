import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TeamList from './TeamList'
import Team from './Team'
import Welcome from './Welcome'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Welcome }/>
          <Route exact path='/teams' component = { TeamList }/>
          <Route path='/teams/:id' component={ Team }/>
        </Switch>
      </div>
    );
  }
}

export default App

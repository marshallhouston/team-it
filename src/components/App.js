import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TeamList from './TeamList'
import Team from './Team'
import { getTeams } from '../utils/requests'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
  getTeams()
    .then((teams) => this.setState({ teams }))
    .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Team It! </h1>
        <Switch>
          <Route exact path='/' render={()=><TeamList teams={this.state.teams}/>}/>
          <Route path='/teams/:id' component={ Team }/>
        </Switch>
      </div>
    );
  }
}

export default App;

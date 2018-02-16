import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TeamList from './TeamList'
import Team from './Team'

// team info hardcoded right now, will hit API to gather all team info
class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [{id: 1, name: "Westwood Boy's Soccer", phone: "555-555-5555"}, {id: 15, name: "Lynx Baseball", phone: "503-503-5033"}]
    }
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

import React, { Component } from 'react'
import TeamList from './TeamList'

// right now, teams will be mocked data.... will need to get this info from the API based on the user... grab all their teams
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
        <TeamList teams={ this.state.teams }/>
      </div>
    );
  }
}

export default App;

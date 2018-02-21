import React, { Component } from 'react'
import TeamCard from './TeamCard'
import { getTeams } from '../utils/requests'
import NewTeamForm from './NewTeamForm'

const createTeamCards = (teams) => {
  return teams.map(team => {
    return (
      <TeamCard
        key={ team.name + team.id }
        team={ team }
      />
    )
  })
}

class TeamList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    getTeams()
      .then((teams) => this.setState({ teams }))
      .catch((error) => console.error({ error }))
  }

  updateTeams = (name, phone) => {
    this.setState({ teams: [...this.state.teams, { name, phone }] })
  }

  render() {
    return (
      <div className="teams-list">
        <h2>Your Teams</h2>
        { createTeamCards(this.state.teams) }
        <NewTeamForm
          updateTeams={ this.updateTeams }
        />
      </div>
    )
  }
}

export default TeamList

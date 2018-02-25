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

  updateTeams = (name, teamInfo) => {
    const id = teamInfo.id
    const teamCode = teamInfo.team_code
    this.setState({ teams: [...this.state.teams, { id, name, teamCode }] })
  }

  render() {
    return (
      <div className="teams-list">
        <h2>Teams</h2>
        <NewTeamForm
          updateTeams={ this.updateTeams }
        />
        { createTeamCards(this.state.teams) }
      </div>
    )
  }
}

export default TeamList

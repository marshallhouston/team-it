import React, { Component } from 'react'
import TeamInfo from './TeamInfo'
import FollowerList from './FollowerList'
import NewFollowerForm from './NewFollowerForm'
import { getTeamDetails } from '../utils/requests'

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamInfo: {},
      followers: [],
      teamId: parseInt(props.match.params.id, 10)
    }
  }

  componentDidMount() {
    const teamId = this.state.teamId
    getTeamDetails(teamId)
      .then(teamDetails => this.setState({
        teamInfo: teamDetails.teamInfo,
        followers: teamDetails.followers
      }))
      .catch(error => console.error({ error }))
  }

  updateFollowers = (name, phone, email) => {
    this.setState({ followers: [...this.state.followers, { name, phone, email }] })
  }

  render() {
    return (
      <div className="team">
        <TeamInfo teamInfo={ this.state.teamInfo }/>
        <FollowerList followers={ this.state.followers }/>
        <NewFollowerForm
          updateFollowers={ this.updateFollowers }
          teamId={ this.state.teamId }
        />
      </div>
    )
  }
}

export default Team

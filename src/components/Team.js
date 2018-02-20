import React, { Component } from 'react'
import TeamInfo from './TeamInfo'
import FollowerList from './FollowerList'
import NewFollowerForm from './NewFollowerForm'
import { getTeamDetails } from '../utils/requests'

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamInfo: {id: 1, name: "Westwood Soccer", phone: "555-555-5555"},
      followers: [{id: 2, name: "Amy Raymond", phone: "555-555-5555", email: "amy@parent.com"}, {id: 3, name: "Greg McGee", phone: "555-555-5555", email: "greg@parent.com"}],
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
        <NewFollowerForm updateFollowers={ this.updateFollowers }/>
      </div>
    )
  }
}

export default Team

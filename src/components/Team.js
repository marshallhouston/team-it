import React, { Component } from 'react'
import TeamInfo from './TeamInfo'
import FamilyList from './FamilyList'
import NewFamilyForm from './NewFamilyForm'

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamInfo: {id: 1, name: "Westwood Soccer", phone: "555-555-5555"},
      families: [{id: 2, name: "Amy Raymond", phone: "555-555-5555", email: "amy@parent.com"}, {id: 3, name: "Greg McGee", phone: "555-555-5555", email: "greg@parent.com"}],
      teamId: parseInt(props.match.params.id, 10)
    }
  }

  updateFamilies = (name, phone, email) => {
    this.setState({ families: [...this.state.families, { name, phone, email }] })
  }

  render() {
    return (
      <div className="team">
        <TeamInfo teamInfo={ this.state.teamInfo }/>
        <FamilyList families={ this.state.families }/>
        <NewFamilyForm updateFamilies={ this.updateFamilies }/>
      </div>
    )
  }
}

export default Team

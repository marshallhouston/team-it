import React, { Component } from 'react'
import { createTeam } from '../utils/requests'

class NewTeamForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  updateTeamInfo = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addTeam = (event) => {
    event.preventDefault()
    const name = this.state.name

    createTeam(name)
      .then(response => {
        return {
          teamCode: response.data.attributes.team_code,
          id: response.data.id
        }
      })
      .then(teamInfo => this.props.updateTeams(name, teamInfo))
      .catch(error => console.error(error))

    this.setState({ name: '' })
  }

  render() {
    return (
      <div className="form-container">
        <form className="new-team-form">
          <div className="form-input new-team-name">
            <input
              type="text"
              placeholder="Team Name"
              value={ this.state.name }
              onChange={ this.updateTeamInfo.bind(this, 'name') }
            />
          </div>
          <div className="button">
            <button
              type="submit"
              onClick={ this.addTeam }
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewTeamForm

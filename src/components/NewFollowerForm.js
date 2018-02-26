import React, { Component } from 'react'
import { addFollowers } from '../utils/requests'
import validateInputs from '../utils/validateInputs'

class NewFollowerForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }

  updateFollowerInfo = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addFollower = (event) => {
    event.preventDefault()
    const name = this.state.name
    const phone = this.state.phone
    const email = this.state.email

    const validCheck = validateInputs(name, phone, email)
    const allValid = Object.keys(validCheck).every(x => validCheck[x])

    if (allValid) {
      const teamId = this.props.teamId
      addFollowers(teamId, name, phone, email)
        .then(() => this.props.updateFollowers(name, phone, email))
        .catch(error => console.error(error))

    this.setState({ name: '', phone: '', email: '' })
  }

  render() {
    const validStatuses = validateInputs(this.state.name, this.state.phone, this.state.email)
    return (
      <div className="form-container">
        <form className="new-follower-form">
          <div className="form-input new-follower-name">
            <input
              type="text"
              placeholder="Name"
              value={ this.state.name }
              onChange={ this.updateFollowerInfo.bind(this, 'name') }
            />
          </div>
          <div className="form-input new-follower-phone">
            <input
              type="tel"
              placeholder="555-555-5555"
              value={ this.state.phone }
              onChange={ this.updateFollowerInfo.bind(this, 'phone') }
            />
          </div>
          <div className="form-input new-follower-email">
            <input
              type="email"
              placeholder="example@example.com"
              value={ this.state.email }
              onChange={ this.updateFollowerInfo.bind(this, 'email') }
            />
          </div>
          <div className="button">
            <button
              type="submit"
              onClick={ this.addFollower }
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewFollowerForm

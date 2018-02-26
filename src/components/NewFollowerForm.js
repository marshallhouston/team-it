import React, { Component } from 'react'
import { addFollowers } from '../utils/requests'
import validateInputs from '../utils/validateInputs'

class NewFollowerForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: '',
      focused: {
        name: false,
        phone: false,
        email: false,
      }
    }
  }

  updateFollowerInfo = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  handleBlur = (key) => (event) => {
    this.setState({
      focused: { ...this.state.focused, [key]: true },
    })
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

      this.setState({ name: '', phone: '', email: '', focused: {
          name: false,
          phone: false,
          email: false,
        }
      })
    }
  }

  render() {
    const validStatuses = validateInputs(this.state.name, this.state.phone, this.state.email)
    const shouldShowError = (key) => {
      const validStatus = validStatuses[key]
      const shouldShow = this.state.focused[key]
      return validStatus ? false : shouldShow
    }

    return (
      <div className="form-container">
        <form className="new-follower-form">
          <div className="form-input new-follower-name">
            <input
              className={shouldShowError('name') ? "error" : ""}
              onBlur={this.handleBlur('name')}
              type="text"
              placeholder="Name"
              value={ this.state.name }
              onChange={ this.updateFollowerInfo.bind(this, 'name') }
            />
          </div>
          <div className="form-input new-follower-phone">
            <input
              className={shouldShowError('phone') ? "error" : ""}
              onBlur={this.handleBlur('phone')}
              type="tel"
              placeholder="555-555-5555"
              value={ this.state.phone }
              onChange={ this.updateFollowerInfo.bind(this, 'phone') }
            />
          </div>
          <div className="form-input new-follower-email">
            <input
              className={shouldShowError('email') ? "error" : ""}
              onBlur={this.handleBlur('email')}
              type="email"
              placeholder="email@email.com"
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

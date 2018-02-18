import React, { Component } from 'react'

class NewFamilyForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }

  updateFamilyInfo = (key, event) => {
    this.setState({ [key]: event.target.value})
  }

  addFamily = (event) => {
    event.preventDefault()
    const name = this.state.name
    const phone = this.state.phone
    const email = this.state.email

    // send this info with a post request to the backend.
    this.props.updateFamilies(name, phone, email)

    // reset the state of the form if the post is successful. otherwise keep the info and have some error message?
    this.setState({ name: '', phone: '', email: '' })
  }

  render() {
    return (
      <div className="form-container">
        <form className="new-family-form">
          <div className="form-input new-family-name">
            <input
              type="text"
              placeholder="Name"
              value={ this.state.name }
              onChange={ this.updateFamilyInfo.bind(this, 'name') }
            />
          </div>
          <div className="form-input new-family-phone">
            <input
              type="tel"
              placeholder="555-555-5555"
              value={ this.state.phone }
              onChange={ this.updateFamilyInfo.bind(this, 'phone') }
            />
          </div>
          <div className="form-input new-family-email">
            <input
              type="email"
              placeholder="example@example.com"
              value={ this.state.email }
              onChange={ this.updateFamilyInfo.bind(this, 'email') }
            />
          </div>
          <div className="button">
            <button
              type="submit"
              onClick={ this.addFamily }
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewFamilyForm

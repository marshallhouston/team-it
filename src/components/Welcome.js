import React from 'react'

const Welcome = () => {
  return (
    <div className="welcome">
      <h1> Welcome to Team It! </h1>
      <div className="welcome-info">
        <h3>How it Works</h3>
        <div className="welcome-text">
          <p>Send a text message to 1-205-639-0334 with your team code and message.</p>
          <img src="/team_it_message.png" alt="Example text message" className="message-image"></img>
          <p>All the followers of team 880 will receive your message.</p>
          <p>Change the team code to send a message to a different team.</p>
      </div>
      </div>
    </div>
  )
}

export default Welcome

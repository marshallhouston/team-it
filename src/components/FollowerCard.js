import React from 'react'
import formatPhone from '../utils/formatPhone'

const FollowerCard = ({ follower }) => {
  return (
    <div className="follower-card">
      <div className="follower-details-container">
        <p className="follower-name">{ follower.name }</p>
      </div>
      <div className="follower-details-container">
        <p className="follower-phone">{ formatPhone(follower.phone) }</p>
      </div>
      <div className="follower-details-container">
        <p className="follower-email">{ follower.email }</p>
      </div>
    </div>
  )
}

export default FollowerCard

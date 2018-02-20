import React from 'react'
import FollowerCard from './FollowerCard'

const createFollowerCards = (followers) => {
  return followers.map(follower => {
    return (
      <FollowerCard
        key={ follower.name + follower.id }
        follower= { follower }
      />
    )
  })
}

const FollowerList = ({ followers }) => {
  return (
    <div className="follower-list">
      { createFollowerCards(followers) }
    </div>
  )
}

export default FollowerList

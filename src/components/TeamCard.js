import React from 'react'

const TeamCard = ({ team } ) => {
  return (
    <div className="team-card">
      <h2 className="team-name"> { team.name }</h2>
      <h2 className="team-phone"> { team.phone }</h2>
    </div>
  )
}

export default TeamCard

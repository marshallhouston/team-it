import React from 'react'

const TeamInfo = ({ teamInfo }) => {
  return (
    <div className="team-info">
      <h2 className="team-name"> { teamInfo.name }</h2>
      <h2 className="team-phone"> { teamInfo.phone }</h2>
    </div>
  )
}

export default TeamInfo

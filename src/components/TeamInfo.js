import React from 'react'

const TeamInfo = ({ teamInfo }) => {
  return (
    <div className="team-info">
      <h2 className="team-name"> { teamInfo.name }</h2>
      <h2 className="team-code"> Team Code: { teamInfo.teamCode }</h2>
    </div>
  )
}

export default TeamInfo

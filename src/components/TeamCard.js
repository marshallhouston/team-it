import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ team } ) => {
  return (
      <div className="team-card">
        <Link to={`/teams/${team.id}`}>
        <h2 className="team-name"> { team.name }</h2>
        <h2 className="team-phone"> { team.phone }</h2>
        </Link>
      </div>
  )
}

export default TeamCard

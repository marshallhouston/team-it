import React from 'react';
import TeamCard from './TeamCard'

const createTeamCards = (teams) => {
  return teams.map(team => {
    return (
      <TeamCard
        key={ team.id }
        team={ team }
      />
    )
  })
}

const TeamList = ({ teams }) => {
  return (
    <div className="teams-list">
      <h2>Your Teams</h2>
      { createTeamCards(teams)}
    </div>
  )
}

export default TeamList

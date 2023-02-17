import React from 'react'

const TeamDetails = ({ team }) => {
  const teamRosterText = team.roster
  const formattedRosterText = teamRosterText.split('\n').map((athlete, index) => <p key={index} className="mb-0">{athlete}</p>)

  return (
    <div className="team-detail-container">
      <div className="text-brand-primary mb-1">
        {team.name}
      </div>
      <div className="mb-1">
        Coach - {team.coach}
      </div>
      <div className="">
        {formattedRosterText}
      </div>
    </div>
  )
}

export default TeamDetails
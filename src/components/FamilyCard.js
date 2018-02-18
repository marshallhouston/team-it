import React from 'react'

const FamilyCard = ({ family }) => {
  return (
    <div className="family-card">
      <div className="family-details-container">
        <p className="family-name">{ family.name }</p>
      </div>
      <div className="family-details-container">
        <p className="family-phone">{ family.phone }</p>
      </div>
      <div className="family-details-container">
        <p className="family-email">{ family.email }</p>
      </div>
    </div>
  )
}

export default FamilyCard

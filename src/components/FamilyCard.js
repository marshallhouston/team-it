import React from 'react'

const FamilyCard = ({ family }) => {
  return (
    <div className="family-card">
      <p className="family-name">{ family.name }</p>
      <p className="family-phone">{ family.phone }</p>
      <p className="family-email">{ family.email }</p>
    </div>
  )
}

export default FamilyCard

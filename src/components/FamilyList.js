import React from 'react'
import FamilyCard from './FamilyCard'

const createFamilyCards = (families) => {
  return families.map(family => {
    return (
      <FamilyCard
        key={ family.id }
        family= { family }
      />
    )
  })
}

const FamilyList = ({ families }) => {
  return (
    <div className="family-list">
      { createFamilyCards(families) }
    </div>
  )
}

export default FamilyList

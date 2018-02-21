import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-item">
        <Link to="/">
          <div className="nav-bar-link">
            <h4>Dashboard</h4>
          </div>
        </Link>
      </div>
      <div className="nav-bar-item">
        <Link to="/teams">
        <div className="nav-bar-link">
            <h4>Teams</h4>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header

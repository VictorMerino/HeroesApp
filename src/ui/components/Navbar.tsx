import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { HomeIcon } from '../../assets/svg/HomeIcon'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <HomeIcon />
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/marvel">
              Marvel
            </NavLink>

            <NavLink className="nav-item nav-link" to="/dc">
              DC
            </NavLink>

            <NavLink className="nav-item nav-link" to="/search">
              Search
            </NavLink>

            <NavLink className="nav-item nav-link" to="/hero">
              Hero
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-success">Login</span>
            <NavLink className="nav-item nav-link" to="/login">
              Logout
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

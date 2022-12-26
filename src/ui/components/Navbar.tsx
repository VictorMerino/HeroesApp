import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { HomeIcon } from '../../assets/svg/HomeIcon'
import { AuthContext } from '../../auth'

export const Navbar = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)

  const onLogout = () => {
    logout()
    navigate('/')
  }

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
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
          <ul className="navbar-nav ml-auto">
            <NavLink
              className="nav-item nav-link text-success"
              to={user && user.name ? '/admin' : '/login'}
            >
              {user && user.name ? user.name : 'Login'}
            </NavLink>
            <button
              className="nav-item nav-link btn btn-outline-success"
              onClick={() => onLogout()}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

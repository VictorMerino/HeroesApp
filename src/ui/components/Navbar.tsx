import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { HomeIcon } from '../../assets/svg/HomeIcon'
import { AuthContext } from '../../auth'
import { checkLastPath } from '../../auth/helpers'

export const Navbar = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)

  const onLogout = () => {
    //@ts-expect-error TS2722
    logout()
    const navigateTo = checkLastPath() || '/'
    navigate(navigateTo)
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <HomeIcon />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarSupportedContent">
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

          <div className="w-100 order-3 dual-collapse2 d-sm-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <NavLink
                className="nav-item nav-link text-success"
                to={user && user.name ? '/admin' : '/auth/login'}
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
      </div>
    </nav>
  )
}

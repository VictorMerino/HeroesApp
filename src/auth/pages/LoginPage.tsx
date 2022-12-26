import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const onLogin = () => {
    //@ts-expect-error TS2722
    login('Víctor')
    navigate('/admin')
  }
  return (
    <>
      <div className="d-flex align-items-center vh-100">
        <div className="container">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">LoginPage</h5>
              <p className="card-text">Aquí irá el form</p>
              <a href="#" className="btn btn-primary" onClick={() => onLogin()}>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

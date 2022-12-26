import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { creators } from './creators'

const initialState = {
  logged: false,
  name: null,
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (name = '') => {
    console.log(name)
    const action = {
      type: creators.login,
      payload: {
        id: 'ABC',
        name,
      },
    }
    dispatch(action)
  }

  const logout = () => {
    const action = {
      type: creators.logout,
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

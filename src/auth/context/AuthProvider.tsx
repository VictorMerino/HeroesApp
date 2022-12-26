import React, { ReactElement, useReducer } from 'react'

import { getUser, setUser, removeUser } from '../helpers'

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { Creators } from './types'

const initialState = {
  logged: false,
  name: null,
}

const init = () => {
  const user = getUser()

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init)

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name,
    }
    const action = {
      type: Creators.login,
      payload: user,
    }
    setUser(user)
    dispatch(action)
  }

  const logout = () => {
    const action = {
      type: Creators.logout,
    }
    removeUser()
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

import React, { useReducer } from 'react'

import { getItems, setItem } from '../../services'

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { creators } from './creators'

const initialState = {
  logged: false,
  name: null,
}

const init = () => {
  const user = getItems('user')

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init)

  const login = (name = '') => {
    console.log(name)
    const user = {
      id: 'ABC',
      name,
    }
    const action = {
      type: creators.login,
      payload: user,
    }
    setItem(user)
    dispatch(action)
  }

  const logout = () => {
    const action = {
      type: creators.logout,
    }
    setItem()
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

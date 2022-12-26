import React, { ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../auth'

export const AuthRouter = ({ children }: { children: ReactElement }) => {
  const { logged } = useContext(AuthContext)
  return logged ? <Navigate to="/admin" /> : children
}

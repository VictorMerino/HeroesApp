import React, { ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../auth'

export const PrivateRouter = ({ children }: { children: ReactElement }) => {
  const { logged } = useContext(AuthContext)
  return logged ? children : <Navigate to="/" />
}

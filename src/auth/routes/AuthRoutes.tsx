import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        {/*Sign up page, etc... */}
      </Routes>
    </>
  )
}

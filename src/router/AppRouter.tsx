import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route
          path="auth/*"
          element={
            <AuthRouter>
              <AuthRoutes />
            </AuthRouter>
          }
        />

        {/* Private routes */}
        <Route
          path="admin/*"
          element={
            <PrivateRouter>
              <AdminRoutes />
            </PrivateRouter>
          }
        />

        {/* Public routes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

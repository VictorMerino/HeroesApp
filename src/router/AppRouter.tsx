import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { AuthRouter } from './AuthRouter'
import { PrivateRoutes } from './PrivateRoutes'

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
            <PrivateRoutes>
              <AdminRoutes />
            </PrivateRoutes>
          }
        />

        {/* Public routes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

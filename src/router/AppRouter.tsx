import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { LoginPage } from '../auth'

import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

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

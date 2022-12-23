import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { LoginPage } from '../auth'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        {/* Private routes */}
        <Route path="admin/*" element={<AdminRoutes />} />

        {/* Public routes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

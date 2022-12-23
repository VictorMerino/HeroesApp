import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'

import { AdminPage } from '../pages'

export const AdminRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<AdminPage />} />

        {/*Profile page, edit heroes, etc... */}
        {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}
      </Routes>
    </>
  )
}

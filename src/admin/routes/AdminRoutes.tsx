import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'

import { AdminPage } from '../pages'

export const AdminRoutes = () => {
  return (
    <>
      {/* We could use a different navbar for private area */}
      <Navbar />

      <Routes>
        <Route path="*" element={<AdminPage />} />

        {/*Profile page, edit heroes, etc... */}
      </Routes>
    </>
  )
}

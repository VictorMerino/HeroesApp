import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui'
import { MarvelPage, DCPage } from '../heroes'
import { LoginPage } from '../auth'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}

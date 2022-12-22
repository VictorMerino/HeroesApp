import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DCPage } from '../heroes/pages/DCPage'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<DCPage />} />
        <Route path="dc" element={<MarvelPage />} />

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'

import { MarvelPage, DCPage, SearchPage, HeroPage, HomePage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<HomePage />} />

        {/* TO-DO: make an actual 404 page, or redirect to any other page??
          And careful! Any not found path is set as the lastPath!! */}
        <Route path="*" element={<>404 Not found</>} />
      </Routes>
    </>
  )
}

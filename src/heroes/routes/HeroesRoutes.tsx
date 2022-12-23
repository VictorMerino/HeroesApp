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

        {/*Search, hero by id, etc... */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

import React from 'react'
import { MainLayout } from '../../ui'
import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <MainLayout>
      <>
        <h1>MarvelPage</h1>
        <hr />
        <HeroList publisher="Marvel Comics" />
      </>
    </MainLayout>
  )
}

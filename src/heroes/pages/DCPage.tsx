import React from 'react'
import { MainLayout } from '../../ui'
import { HeroList } from '../components'

export const DCPage = () => {
  return (
    <MainLayout>
      <>
        <h1>DCPage</h1>
        <hr />
        <HeroList publisher="DC Comics" />
      </>
    </MainLayout>
  )
}

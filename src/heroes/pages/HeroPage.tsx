import React from 'react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../../ui'
import { getHeroById } from '../helpers'
import { Hero } from '../types/Hero'

type HeroParams = {
  id: Hero['id']
}
export const HeroPage = () => {
  const { id } = useParams<HeroParams>()
  const hero = getHeroById(id as string)

  if (!hero) return <>Hero not found</>

  return (
    <MainLayout>
      <h1>{hero.id}</h1>
    </MainLayout>
  )
}

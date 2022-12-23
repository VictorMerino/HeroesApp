import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { Publisher } from '../types/Hero'

import { HeroCard } from '.'

export const HeroList = ({ publisher }: { publisher: Publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <>
      <h3>Publisher: {publisher}</h3>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map(hero => {
          return <HeroCard key={hero.id} hero={hero} />
        })}
      </div>
    </>
  )
}

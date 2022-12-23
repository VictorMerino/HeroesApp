import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { Publisher } from '../types/Hero'

export const HeroList = ({ publisher }: { publisher: Publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <>
      <h3>Publisher: {publisher}</h3>
      <ul>
        {heroes.map(hero => {
          return <li key={hero.id}>{hero.superhero}</li>
        })}
      </ul>
    </>
  )
}

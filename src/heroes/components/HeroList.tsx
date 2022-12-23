import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { Publisher } from '../types/Hero'

export const HeroList = ({ publisher }: { publisher: Publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <>
      <h3>Publisher: {publisher}</h3>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map(hero => {
          return (
            <li className="col" key={hero.id}>
              {hero.superhero}
            </li>
          )
        })}
      </div>
    </>
  )
}

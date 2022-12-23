import React from 'react'
import { Hero } from '../types/Hero'

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const imageUrl = `/public/images/heroes/${hero.id}-min.jpg`
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row">
            <div className="col-4">
              <img src={imageUrl} className="card-img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{hero.superhero}</h5>
                <p className="card-text">{hero.alter_ego}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

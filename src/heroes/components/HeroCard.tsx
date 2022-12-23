import React from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../types/Hero'

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const { id, superhero, alter_ego, characters, first_appearance } = hero
  const imageUrl = `/public/images/heroes/${id}-min.jpg`

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
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {alter_ego !== characters && (
                  <>
                    <hr />
                    <small style={{ fontSize: '.5rem', lineHeight: '.25rem' }}>
                      {characters}
                    </small>
                  </>
                )}
                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>
                <hr />
                <Link to={`/hero/${id}`}>Más info</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

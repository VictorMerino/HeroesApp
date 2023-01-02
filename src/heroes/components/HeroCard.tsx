import React from 'react'
import { Link } from 'react-router-dom'
import { getHeroImgUrl } from '../helpers'
import { Hero } from '../types/Hero'

const CharactersByEgo = ({
  alter_ego,
  characters,
}: {
  alter_ego: Hero['alter_ego']
  characters: Hero['characters']
}) => {
  if (alter_ego === characters) return null

  return (
    <>
      <hr />
      <small style={{ fontSize: '.5rem', lineHeight: '.25rem' }}>
        {characters}
      </small>
    </>
  )
}

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const { id, superhero, alter_ego, characters, first_appearance } = hero
  const imageUrl = getHeroImgUrl(id)

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row">
            <div className="col-4">
              <img src={imageUrl} className="card-img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title" data-testid="hero-title">
                  {superhero}
                </h5>
                <p className="card-text">{alter_ego}</p>
                <CharactersByEgo
                  alter_ego={alter_ego}
                  characters={characters}
                />
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

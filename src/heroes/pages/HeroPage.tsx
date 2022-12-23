import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainLayout } from '../../ui'
import { getHeroById, getHeroImgUrl } from '../helpers'
import { Hero } from '../types/Hero'

type HeroParams = {
  id: Hero['id']
}
export const HeroPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<HeroParams>()
  const hero = useMemo(() => getHeroById(id as string), [id])

  const onNavigateBack = () => {
    let navigateTo = '/'
    if (hero?.publisher === 'DC Comics') navigateTo = '/dc'
    if (hero?.publisher === 'Marvel Comics') navigateTo = '/marvel'
    navigate(navigateTo)
  }

  if (!hero) return <>Hero not found</>

  const imageUrl = getHeroImgUrl(id as string)

  return (
    <MainLayout>
      <>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => {
            onNavigateBack()
          }}
        >
          Back to list
        </button>
        <div className="row mt-5 animate__animated animate__fadeInLeft">
          <div className="col-4">
            <img src={imageUrl} alt="" className="img-thumbnail" />
          </div>
          <div className="col-8">
            <h1>{hero.superhero}</h1>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Alter Ego: </strong>
                {hero.alter_ego}
              </li>
              <li className="list-group-item">
                <strong>First Appearance: </strong>
                {hero.first_appearance}
              </li>
              <li className="list-group-item">
                <strong>Publisher: </strong>
                {hero.publisher}
              </li>
            </ul>
          </div>
        </div>
      </>
    </MainLayout>
  )
}

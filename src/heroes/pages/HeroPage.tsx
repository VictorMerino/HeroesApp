import React from 'react'
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
  const hero = getHeroById(id as string)

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
        <h1>{hero.id}</h1>
        <div className="row mt-5">
          <div className="col-4">
            <img src={imageUrl} alt="" className="img-thumbnail" />
          </div>
          <div className="col-8">
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

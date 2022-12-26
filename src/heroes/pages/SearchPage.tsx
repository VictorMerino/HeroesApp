import React, { FormEvent } from 'react'

import { useForm } from '../../hooks/useForm'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { MainLayout } from '../../ui'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')
  const heroes = getHeroesByName(q as string)

  // @ts-expect-error TS2339
  const { searchText, onInputChange } = useForm({ searchText: q || '' })

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault()
    // if (searchText.trim().length < 3) return
    navigate(`?q=${searchText}`)
  }
  return (
    <MainLayout>
      <>
        <div className="row my-5">
          <div className="col-12 col-sm-4">
            <h2>Search</h2>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input
                className="form-control"
                placeholder="Search..."
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
            </form>
          </div>
          <div className="col-12 col-sm-8">
            <h2>Results</h2>
            <hr />

            {!q && (
              <div className="alert alert-primary animate__animated animate__fadeIn">
                Search a hero
              </div>
            )}

            {q && !heroes.length && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hero with <strong>{q}</strong>
              </div>
            )}

            {heroes?.map(hero => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
        </div>
      </>
    </MainLayout>
  )
}

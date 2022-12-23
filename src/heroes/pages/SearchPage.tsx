import React from 'react'

import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { MainLayout } from '../../ui'
import { HeroCard } from '../components'

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm({ searchText: '' })

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  console.log(q)
  const onSearchSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log({ searchText })
    if (searchText.trim().length < 3) return

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
            <div className="alert alert-primary">Search a hero</div>
            <div className="alert alert-danger">
              No hero with <strong>{q}</strong>
            </div>
            {/* <HeroCard hero={hero} /> */}
          </div>
        </div>
      </>
    </MainLayout>
  )
}

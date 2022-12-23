import React from 'react'
import { MainLayout } from '../../ui'
import { HeroCard } from '../components'

export const SearchPage = () => {
  return (
    <MainLayout>
      <>
        <div className="row my-5">
          <div className="col-12 col-sm-4">
            <h2>Search</h2>
            <hr />
            <form>
              <input
                className="form-control"
                placeholder="Search..."
                name="searchText"
                autoComplete="off"
              />
            </form>
          </div>
          <div className="col-12 col-sm-8">
            <h2>Results</h2>
            <hr />
            <div className="alert alert-primary">Search a hero</div>
            <div className="alert alert-danger">
              No hero with <strong>ABC</strong>
            </div>
            {/* <HeroCard hero={hero} /> */}
          </div>
        </div>
      </>
    </MainLayout>
  )
}

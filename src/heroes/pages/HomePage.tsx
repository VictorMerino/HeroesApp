import React from 'react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../../ui'

export const HomePage = () => {
  return (
    <MainLayout>
      <>
        <h1>HomePage</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-3 align-items-center justify-content-center">
          <div className="col">
            <div className="card">
              <div className="card-body flex align-self-center">
                <Link to={`/marvel`}>
                  <img src={`/images/marvel-logo.png`} className="card-img" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body flex align-self-center">
                <Link to={`/dc`}>
                  <img src={`/images/dc-logo.png`} className="card-img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  )
}

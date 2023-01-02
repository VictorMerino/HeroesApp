import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PrivateRouter } from '../../src/router'
import { LOGGED_STATE, UNLOGGED_STATE } from '../helpers/auth'

describe('<PrivateRouter>', () => {
  test('should return children if logged', () => {
    render(
      <AuthContext.Provider value={LOGGED_STATE}>
        <PrivateRouter />
      </AuthContext.Provider>
    )
  })

  test('should reject if unlogged', () => {
    // Skipped because it's looping eternally
    render(
      <AuthContext.Provider value={UNLOGGED_STATE}>
        <MemoryRouter initialEntries={['/admin']}>
          <Routes>
            <Route
              path="admin"
              element={
                <PrivateRouter>
                  <h1>Admin page</h1>
                </PrivateRouter>
              }
            />
            <Route path="/" element={<h1>Home page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Home page')).toBeTruthy()
  })
})

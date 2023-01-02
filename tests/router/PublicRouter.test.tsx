import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PublicRouter } from '../../src/router'
import { LOGGED_STATE, UNLOGGED_STATE } from '../helpers/auth'

const renderPublicRoute = (state = {}) => {
  return (
    <AuthContext.Provider value={state}>
      <MemoryRouter>
        <PublicRouter>
          <h1>Random public route</h1>
        </PublicRouter>
      </MemoryRouter>
    </AuthContext.Provider>
  )
}
describe('<PublicRouter>', () => {
  test('should return children if not logged', () => {
    render(renderPublicRoute(UNLOGGED_STATE))

    expect(screen.getByText('Random public route'))
  })
  test('should return children if logged', () => {
    render(renderPublicRoute(LOGGED_STATE))

    expect(screen.getByText('Random public route'))
  })
})

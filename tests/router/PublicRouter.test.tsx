import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PublicRouter } from '../../src/router'
import { LOGGED_STATE, UNLOGGED_STATE } from '../helpers/auth'

const renderPublicRoute = (state = {}, initialRoute = '/') => {
  return (
    <AuthContext.Provider value={state}>
      <MemoryRouter initialEntries={[initialRoute]}>
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
  test('should set item in localStorage', () => {
    Storage.prototype.setItem = jest.fn()
    const initialRoute = '/marvel'
    render(renderPublicRoute(LOGGED_STATE, initialRoute))

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      expect.stringContaining(initialRoute)
    )
  })
})

import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router'
import { LOGGED_STATE, UNLOGGED_STATE } from '../helpers/auth'

const renderPublicRoute = (state = {}, initialRoute = '/') => {
  return (
    <AuthContext.Provider value={state}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
      </MemoryRouter>
    </AuthContext.Provider>
  )
}

describe('<AppRouter>', () => {
  test('should return children if not logged', () => {
    render(renderPublicRoute(UNLOGGED_STATE))

    const userButton = screen.getByTestId('user-button')
    expect(userButton.textContent).toBe('Login')
  })
  test('should return children if logged', () => {
    render(renderPublicRoute(LOGGED_STATE))

    const userButton = screen.getByTestId('user-button')
    expect(userButton.textContent).toBe(LOGGED_STATE.user.name)
  })
})

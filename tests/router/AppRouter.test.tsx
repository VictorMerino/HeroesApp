import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
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

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('<AppRouter>', () => {
  beforeEach(() => jest.clearAllMocks())
  // TODO: check if these test should be in another file...
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

  test('should call to logout and navigate to last route when clicking on logout button', () => {
    const logout = jest.fn()
    const currentRoute = '/marvel'
    render(renderPublicRoute({ ...LOGGED_STATE, logout }, currentRoute))

    const userButton = screen.getByTestId('user-button')
    expect(userButton.textContent).toBe(LOGGED_STATE.user.name)

    const logoutButton = screen.getByTestId('logout-button')
    fireEvent.click(logoutButton)

    expect(logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith(currentRoute)
  })
})

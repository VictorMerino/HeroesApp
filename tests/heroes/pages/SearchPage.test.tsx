import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { SearchPage } from '../../../src/heroes/pages'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

const renderPublicRouteEmpty = (state = {}, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <SearchPage />
    </MemoryRouter>
  )
}

const renderPublicRouteWithQuery = (query = '') => {
  return (
    <MemoryRouter initialEntries={[`/search?q=${query}`]}>
      <SearchPage />
    </MemoryRouter>
  )
}
describe('<SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should show page with default text', () => {
    render(renderPublicRouteEmpty())

    screen.getByText('Search a hero')
  })

  test('should show Batman when searching for it', () => {
    const query = 'batman'
    render(renderPublicRouteWithQuery(query))

    expect(screen.queryByText('Search a hero')).toBeFalsy()

    const heroTitle = screen.getByTestId('hero-title')
    expect(heroTitle.textContent?.toLocaleLowerCase()).toBe(query)
  })

  test('should show "hero not found" when searching for an unknown string', () => {
    const query = 'churrito'
    render(renderPublicRouteWithQuery(query))

    expect(screen.queryByText('Search a hero')).toBeFalsy()

    const heroNotFound = screen.getByTestId('hero-not-found')
    expect(heroNotFound.textContent?.toLocaleLowerCase()).toContain(query)

    const heroTitle = screen.queryByTestId('hero-title')
    expect(heroTitle).toBeFalsy()
  })

  test('should call to navigate with queryParams when searching for a hero', () => {
    const inputValue = 'superman'

    render(renderPublicRouteEmpty())

    const searchInput = screen.getByLabelText('Search here')
    const searchForm = screen.getByRole('form')

    fireEvent.change(searchInput, { target: { value: inputValue } })
    fireEvent.submit(searchForm)

    expect(mockedUseNavigate).toHaveBeenCalledWith(
      expect.stringContaining(inputValue)
    )
  })
})

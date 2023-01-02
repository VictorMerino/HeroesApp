import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { SearchPage } from '../../../src/heroes/pages'

describe('<SearchPage />', () => {
  test('should show page with default text', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    screen.getByText('Search a hero')
  })

  test('should show Batman when searching for it', () => {
    const query = 'batman'
    render(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.queryByText('Search a hero')).toBeFalsy()

    const heroTitle = screen.getByTestId('hero-title')
    expect(heroTitle.textContent?.toLocaleLowerCase()).toBe(query)
  })

  test('should show hero not found when searching for an unknown string', () => {
    const query = 'churrito'
    render(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.queryByText('Search a hero')).toBeFalsy()

    const heroNotFound = screen.getByTestId('hero-not-found')
    expect(heroNotFound.textContent?.toLocaleLowerCase()).toContain(query)

    const heroTitle = screen.queryByTestId('hero-title')
    expect(heroTitle).toBeFalsy()
  })
})

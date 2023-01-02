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

    screen.findByText('Search a hero')
  })
})

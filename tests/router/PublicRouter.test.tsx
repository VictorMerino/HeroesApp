import { render } from '@testing-library/react'
import React from 'react'
import { AuthContext } from '../../src/auth'
import { PublicRouter } from '../../src/router'
import { UNLOGGED_STATE } from '../helpers/auth'

describe.skip('<PublicRouter>', () => {
  test('should return children if not logged', () => {
    render(
      <AuthContext.Provider value={UNLOGGED_STATE}>
        <PublicRouter />
      </AuthContext.Provider>
    )
  })
})

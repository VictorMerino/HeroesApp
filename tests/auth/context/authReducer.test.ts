import { authReducer } from '../../../src/auth/context'
import { Creators } from '../../../src/auth/context/types'
import {
  DEMO_USER,
  EMPTY_STATE,
  LOGGED_STATE,
  UNLOGGED_STATE,
} from '../../helpers/auth'

describe('authReducer', () => {
  test('should return default state if no action provided', () => {
    const INITIAL_STATE = EMPTY_STATE
    const newState = authReducer(INITIAL_STATE)

    expect(newState).toBe(INITIAL_STATE)
  })

  test('should return default state if null action provided', () => {
    const INITIAL_STATE = EMPTY_STATE
    const newState = authReducer(INITIAL_STATE, null)

    expect(newState).toBe(INITIAL_STATE)
  })

  test('should call login and set the user on Login', () => {
    const INITIAL_STATE = EMPTY_STATE
    const USER = DEMO_USER

    const AUTH_ACTION = {
      type: Creators.login,
      payload: USER,
    }
    const EXPECTED_STATE = LOGGED_STATE
    const newState = authReducer(INITIAL_STATE, AUTH_ACTION)

    expect(newState).toEqual(EXPECTED_STATE)
  })

  test('should delete user name and set logged to false on Logout', () => {
    // const USER = DEMO_USER
    const INITIAL_STATE = LOGGED_STATE
    const AUTH_ACTION = {
      type: Creators.logout,
    }
    const EXPECTED_STATE = UNLOGGED_STATE
    const newState = authReducer(INITIAL_STATE, AUTH_ACTION)

    expect(newState).toEqual(expect.objectContaining(EXPECTED_STATE))
  })
})

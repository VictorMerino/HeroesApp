import { AuthAction, Creators } from './types'

export const authReducer = (state = {}, action: AuthAction) => {
  switch (action.type) {
    case Creators.login:
      return {
        logged: true,
        user: action.payload,
      }
    case Creators.logout:
      return {
        logged: false,
        user: null,
      }
    default:
      return state
  }
}

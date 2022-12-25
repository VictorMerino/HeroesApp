import { creators } from './creators'

const initialState = {
  logged: false,
  name: null,
}
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case creators.login:
      return {
        logged: true,
        name: action.payload,
      }
    case creators.logout:
      return {
        logged: false,
        name: null,
      }
    default:
      return state
  }
}

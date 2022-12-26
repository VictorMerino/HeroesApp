import { creators } from './creators'

const initialState = {
  logged: false,
  name: null,
}
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case creators.login:
      console.log(action)
      return {
        logged: true,
        user: action.payload,
      }
    case creators.logout:
      return {
        logged: false,
        user: null,
      }
    default:
      return state
  }
}

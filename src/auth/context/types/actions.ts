import { Creators } from './creators'

export interface AuthAction {
  type: Creators
  payload?: null | {}
}

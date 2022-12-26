import { getItems, setItem } from '../../services'

export const getUser = () => {
  return getItems('user')
}

export const setUser = (user = {}) => {
  setItem(user, 'user')
}

export const removeUser = () => {
  setUser()
}

import { getItems, removeItem, setItem } from '../../services'

export const getUser = () => {
  return getItems('user')
}

export const setUser = (user = {}) => {
  setItem(user, 'user')
}

export const removeUser = () => {
  // TO-DO: check: better this way or do we need to remove the object?
  removeItem('user')
}

import { getItems, removeItem, setItem } from '../../services'

const getUser = () => getItems('user')

const setUser = (user = {}) => {
  setItem(user, 'user')
}

const removeUser = () => {
  // TO-DO: check: better this way or do we need to remove the object?
  removeItem('user')
}

const setLastPath = path => {
  setItem(path, 'lastPath')
}
const checkLastPath = () => getItems('lastPath')

export { getUser, setUser, removeUser, checkLastPath, setLastPath }

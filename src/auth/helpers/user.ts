import { getItems, removeItem, setItem } from '../../services'

const getUser = () => getItems('user')

const setUser = (user = {}) => {
  setItem(user, 'user')
}

const removeUser = () => {
  removeItem('user')
}

export { getUser, setUser, removeUser }

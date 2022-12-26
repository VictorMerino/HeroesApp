import { getItems, setItem } from '../../services'

const setLastPath = path => {
  setItem(path, 'lastPath')
}
const checkLastPath = () => getItems('lastPath')

export { checkLastPath, setLastPath }

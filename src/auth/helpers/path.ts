import { getItems, setItem } from '../../services'

const setLastPath = (path: string) => {
  setItem(path, 'lastPath')
}
const checkLastPath = () => getItems('lastPath')

export { checkLastPath, setLastPath }

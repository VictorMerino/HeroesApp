import { useLocation } from 'react-router-dom'
import { setLastPath } from '../auth/helpers'

export const PublicRouter = ({ children }) => {
  const { pathname, search } = useLocation()
  console.log(pathname, search)
  setLastPath(pathname + search)
  return children
}

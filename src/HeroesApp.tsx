import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}

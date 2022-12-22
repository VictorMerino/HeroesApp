import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <div
      className="d-flex"
      style={{ minHeight: '100vh', flexDirection: 'column' }}
    >
      <AppRouter />
    </div>
  )
}

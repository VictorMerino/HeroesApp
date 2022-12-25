import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {
  if (!name || name.length === 0) return []

  const trimmedName = name.toLocaleLowerCase().trim()

  return heroes.filter(hero =>
    hero.superhero.toLowerCase().includes(trimmedName)
  )
}

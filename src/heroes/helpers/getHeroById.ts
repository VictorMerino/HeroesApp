import { heroes } from '../data/heroes'
import { Hero } from '../types/Hero'

export const getHeroById = (id: Hero['id']) => {
  return heroes.find(hero => hero.id === id)
}

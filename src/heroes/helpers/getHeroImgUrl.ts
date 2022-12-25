import { Hero } from '../types/Hero'

export const getHeroImgUrl = (id: Hero['id']) => {
  return `/images/heroes/${id}-min.jpg`
}

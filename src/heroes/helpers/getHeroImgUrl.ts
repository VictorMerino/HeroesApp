import { Hero } from '../types/Hero'

export const getHeroImgUrl = (id: Hero['id']) => {
  return `/public/images/heroes/${id}-min.jpg`
}

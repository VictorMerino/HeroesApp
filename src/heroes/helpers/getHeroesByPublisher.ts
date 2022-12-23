import { heroes } from '../data/heroes'
import { /*PUBLISHER*/ Publisher, Hero } from '../types/Hero'

export const getHeroesByPublisher = (publisher: Publisher) => {
  // TO-DO: use Types
  // One interface for Hero
  // One Enum for publisher
  /* if (!PUBLISHER.includes(publisher))
    throw new Error(`${publisher} is not a valid publisher`) */
  if (!['DC Comics', 'Marvel Comics'].includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`)
  }

  return heroes.filter(hero => hero.publisher === publisher)
}

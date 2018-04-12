import { Achievements } from './achievements';

export interface Team {
  id: number
  name: string
  country: string
  //crowdExtimate: number
  icon: string
  //about: string
  achievements ?: Achievements
}

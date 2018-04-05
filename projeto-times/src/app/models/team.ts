import { Achievements } from './achievements';

export class Team {
  id: number
  name: string
  country: string
  //crowdExtimate: number
  icon: string
  //about: string
  achievements ?: Achievements
}

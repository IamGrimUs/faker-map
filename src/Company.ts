import { faker } from '@faker-js/faker'
import { Element } from './CustomMap'

export class Company implements Element {
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `Company Name: ${this.name}
    Catchphrase: ${this.catchPhrase}`
  }
}

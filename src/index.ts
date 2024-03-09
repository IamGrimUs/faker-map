/// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const company = new Company()
const mapContainer = document.getElementById('map')!
const customMap = new CustomMap(mapContainer)

customMap.addMarker(user)
customMap.addMarker(company)

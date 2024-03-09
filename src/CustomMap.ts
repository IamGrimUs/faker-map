export interface Element {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(elementId: HTMLElement) {
    this.googleMap = new google.maps.Map(elementId, { zoom: 1, center: { lat: 0, lng: 0 } })
  }
  addMarker(element: Element): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: element.location.lat,
        lng: element.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: element.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}

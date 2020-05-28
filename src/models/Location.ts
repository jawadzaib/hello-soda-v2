class Location {
  protected latitude: any;
  protected longitude: any;

  constructor(lat: any, long: any) {
    this.latitude = lat;
    this.longitude = long;
  }

  getLatitude() {
    return this.latitude;
  }
  getLongitude() {
    return this.longitude;
  }
}

export default Location;

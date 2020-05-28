

class Location {
    protected latitude: any;
    protected longitude: any;

    constructor(lat : any, long : any) {
        this.latitude = lat;
        this.longitude = long;
    }

    getLatitude() {
        this.latitude;
    }
    getLongitude() {
        this.longitude;
    }
}

export default Location;
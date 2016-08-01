
export class CarBuilder {
  constructor() {
    this._car = new Car();
  }

  getResult() {
    return this._car;
  }

  setSeats(seats) {
    this._car.seats = seats;
  }

  setSportsCar() {
    this._car.type = 'sports';
  }

  setTripComputer() {
    this._car.hasTripComputer = true;
  }

  unsetTripComputer() {
    this._car.hasTripComputer = false;
  }

  setGps() {
    this.setTripComputer();

    this._car.hasGps = true;
  }

  unsetGps() {
    this._car.hasGps = false;
  }
}

export class Car {
  constructor() {
    Object.assign(this, {
      seats: 4,
      type: 'city',
      hasTripComputer: false,
      hasGps: false
    });
  }
}

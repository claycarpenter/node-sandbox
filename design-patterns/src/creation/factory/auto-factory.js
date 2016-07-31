/*
  This auto factory example is inspired by Addy Osmani's example:
  https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
*/

export class AutoFactory {
  createVehicle(type, options) {
    let vehicle;

    switch (type) {
      case 'car':
        vehicle = new Car(options);
        break;
      case 'truck':
        vehicle = new Truck(options);
        break;
    }

    return vehicle;
  }
}

class Car {
  constructor({
    color,
    doors = 4
  }) {
    Object.assign(this, {
      color,
      doors
    });

    switch (doors) {
      case 2:
        this.style = 'coupe';
        break;
      case 3:
      case 5:
        this.style = 'hatchback';
        break;
      case 4:
      default:
        this.style = 'sedan';
    }
  }
}

class Truck {
  constructor({
    color,
    wheels
  }) {
    Object.assign(this, {
      color,
      wheels
    });

    switch (wheels) {
      case 6:
        this.style = 'heavy-duty';
        break;
      case 10:
        this.style = 'semi-truck';
        break;
      case 4:
      default:
        this.style = 'pickup';
        break;
    }
  }
}

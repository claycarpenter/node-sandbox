/*
  Inspired by this pseudocode example on Wikipedia:
  https://en.wikipedia.org/wiki/Builder_pattern#Pseudocode
*/

import {CarBuilder, Car} from '../../../src/creation/builder/car-builder';

describe('CarBuilder', () => {
  let carBuilder;

  beforeEach(() => {
    carBuilder = new CarBuilder();
  });

  it('Builds a sports car', () => {
    // Arrange
    const expected = {
      type: 'sports',
      seats: 2,
      hasTripComputer: true,
      hasGps: false
    };

    // Act
    carBuilder.setSeats(2);
    carBuilder.setSportsCar();
    carBuilder.setTripComputer();
    carBuilder.unsetGps();
    const car = carBuilder.getResult();
    const result = {
      type: car.type,
      seats: car.seats,
      hasTripComputer: car.hasTripComputer,
      hasGps: car.hasGps
    }

    // Assert
    expect(result).toEqual(expected);
  });

  it('GPS requires trip computer', () => {
    // Arrange
    const expected = {
      hasTripComputer: true,
      hasGps: true
    };

    // Act
    carBuilder.setGps();
    const car = carBuilder.getResult();
    const result = {
      hasTripComputer: car.hasTripComputer,
      hasGps: car.hasGps
    }

    // Assert
    expect(result).toEqual(expected);
  });
});

/*
This auto factory example is inspired by Addy Osmani's example:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
*/

import {AutoFactory} from '../../../src/creation/factory/auto-factory';


describe('AutoFactory', () => {
  let autoFactory;

  beforeEach(function() {
    autoFactory = new AutoFactory();
  });

  describe('createVehicle - car', () => {
    it('creates a hatchback', () => {
      // Arrange
      const expected = {
        color: 'blue',
        doors: 5,
        style: 'hatchback'
      };

      // Act
      const result = autoFactory.createVehicle('car', {
        color: expected.color,
        doors: expected.doors
      });

      // Assert
      expect(result.color).toEqual(expected.color);
      expect(result.doors).toEqual(expected.doors);
      expect(result.style).toEqual(expected.style);
    });

    it('creates a sedan by default', () => {
      // Arrange
      const expected = {
        color: 'blue',
        doors: 4,
        style: 'sedan'
      };

      // Act
      const result = autoFactory.createVehicle('car', {
        color: expected.color,
      });

      // Assert
      expect(result.color).toEqual(expected.color);
      expect(result.doors).toEqual(expected.doors);
      expect(result.style).toEqual(expected.style);
    });
  });

  describe('createVehicle - truck', () => {
    it('creates a truck', () => {
      // Arrange
      const expected = {
        color: 'white',
        wheels: 4,
        style: 'pickup'
      };

      // Act
      const result = autoFactory.createVehicle('truck', {
        color: expected.color,
        wheels: expected.wheels
      });

      // Assert
      expect(result.color).toEqual(expected.color);
      expect(result.wheels).toEqual(expected.wheels);
      expect(result.style).toEqual(expected.style);
    });
  });
});

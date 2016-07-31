/*
  Example inspired by Abstract Factory example in Simon Timms'
  Mastering JavaScript Design Patterns - Second Edition
  https://www.packtpub.com/web-development/mastering-javascript-design-patterns-second-edition
*/

import {
  CourtSession,
  TargaryenFactory,
  LordConnington,
  KingAerys,
  LannisterFactory,
  LordTywin,
  KingJoffrey
} from '../../../src/creation/abstract-factory/court-session.js';

describe('CourtSession', () => {
  describe('TargaryenFactory', () => {
    let courtSession;

    beforeEach(() => {
      courtSession = new CourtSession(new TargaryenFactory());
    });

    it('Lord Connington handles complaints with 8 severity', () => {
      // Arrange
      var expected = {
        decisionMaker: LordConnington
      };

      // Act
      var result = courtSession.complaintPresented({severity: 8});

      // Assert
      expect(result.decisionMaker).toEqual(jasmine.any(expected.decisionMaker));
    });

    it('King Aerys handles complaints with 12 severity', () => {
      // Arrange
      var expected = {
        decisionMaker: KingAerys
      };

      // Act
      var result = courtSession.complaintPresented({severity: 12});

      // Assert
      expect(result.decisionMaker).toEqual(jasmine.any(expected.decisionMaker));
    });
  });

  describe('LannisterFactory', () => {
    let courtSession;

    beforeEach(() => {
      courtSession = new CourtSession(new LannisterFactory());
    });

    it('Lord Tywin handles complaints with 8 severity', () => {
      // Arrange
      var expected = {
        decisionMaker: LordTywin
      };

      // Act
      var result = courtSession.complaintPresented({severity: 8});

      // Assert
      expect(result.decisionMaker).toEqual(jasmine.any(expected.decisionMaker));
    });

    it('King Aerys handles complaints with 12 severity', () => {
      // Arrange
      var expected = {
        decisionMaker: KingJoffrey
      };

      // Act
      var result = courtSession.complaintPresented({severity: 12});

      // Assert
      expect(result.decisionMaker).toEqual(jasmine.any(expected.decisionMaker));
    });
  });
});

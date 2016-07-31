/*
  Example inspired by Abstract Factory example in Simon Timms'
  Mastering JavaScript Design Patterns - Second Edition
  https://www.packtpub.com/web-development/mastering-javascript-design-patterns-second-edition
*/


export class CourtSession {
  constructor(abstractFactory) {
    this.abstractFactory = abstractFactory;
    this.complaintThreshold = 10;
  }

  complaintPresented(complaint) {
    const {severity} = complaint;
    let actor;

    if (severity < this.complaintThreshold) {
      actor = this.abstractFactory.getHandOfKing();
    } else {
      actor = this.abstractFactory.getKing();
    }

    return actor.makeDecision(complaint);
  }
}

export class TargaryenFactory {
  constructor() {
    this._handOfKing = new LordConnington();
    this._king = new KingAerys();
  }

  getHandOfKing() {
    return this._handOfKing;
  }

  getKing() {
    return this._king;
  }
}

export class LannisterFactory {
  constructor() {
    this._handOfKing = new LordTywin();
    this._king = new KingJoffrey();
  }

  getHandOfKing() {
    return this._handOfKing;
  }

  getKing() {
    return this._king;
  }
}

class AbstractDecisionMaker {
  makeDecision(complaint) {
    return {
      decisionMaker: this
    }
  }
}

export class LordConnington extends AbstractDecisionMaker {
}

export class KingAerys extends AbstractDecisionMaker {
}

export class LordTywin extends AbstractDecisionMaker {
}

export class KingJoffrey extends AbstractDecisionMaker {
}

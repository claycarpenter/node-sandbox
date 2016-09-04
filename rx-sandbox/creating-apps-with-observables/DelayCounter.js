import React from 'react';
import {Observable, Subject} from 'rxjs';


const INITIAL_STATE = {
  count: 0,
};

export class DelayCounter extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.decrease$ = new Subject();
    this.increase$ = new Subject();

    this.state$ = Observable
      // All Obvs that can alter app state
      .merge(
        this.decrease$.switch(),
        this.increase$.switch()
      )
      .scan((state, changeFunction) => {
        return changeFunction(state);
      }, INITIAL_STATE);
  }

  componentWillMount() {
    this.state$.subscribe((state) => {
      this.setState(state);
    });
  }

  onClickDecrease() {
    // Create fake observable to mimic observable-from-event behavior
    const baseObservable$ = Observable.of(true);

    const delay$ = baseObservable$.delay(1000);

    const updateCounter$ = delay$
      .map(() => (state) => {
        state.count -= 1;

        return state;
      });

    this.decrease$.next(
      updateCounter$
    );
  }

  onClickIncrease() {
    this.increase$.next(
      Observable.of((state) => {
        state.count += 1;

        return state;
      })
    );
  }

  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <hr/>
        <button onClick={() => this.onClickDecrease()}>Decrease</button>
        <button onClick={() => this.onClickIncrease()}>Increase</button>
      </div>
    );
  }
}

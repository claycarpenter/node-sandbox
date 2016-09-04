import React from 'react';
import {Observable, Subject} from 'rxjs';


const INITIAL_STATE = {
  count: 0,
};

export class DelayCounter extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.decreaseClick$ = new Subject();
    this.increaseClick$ = new Subject();

    this.state$ = Observable
      .merge(
        // All Obvs that can alter app state
        this.onClickDecrease(this.decreaseClick$),
        this.onClickIncrease(this.increaseClick$)
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

  onClickDecrease(baseObservable$) {
    const delay$ = baseObservable$.delay(1000);

    const updateCounter$ = delay$
      .map(() => (state) => {
        state.count -= 1;

        return state;
      });

    return updateCounter$;
  }

  onClickIncrease(baseObservable$) {
    return baseObservable$.map(() => state => {
      state.count += 1;

      return state;
    });
  }

  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <hr/>
        <button onClick={(e) => this.decreaseClick$.next(e)}>Decrease</button>
        <button onClick={(e) => this.increaseClick$.next(e)}>Increase</button>
      </div>
    );
  }
}

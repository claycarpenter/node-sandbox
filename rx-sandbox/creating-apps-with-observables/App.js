import React from 'react';
import {Counter} from './Counter';
import {Observable, Subject} from 'rxjs';


const INITIAL_STATE = {
  count: 0,
};
// const INITIAL_STATE = {
//   isLoading: false,
//   posts: [],
//   error: null,
// };

const OBSERVABLES = {
  fetchClicked(observable) {
    return observable
      .map(() => state => state.isLoading = true);
  }
};

export class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.decrease$ = new Subject();
    this.increase$ = new Subject();

    this.state$ = Observable
      // All Obvs that can alter app state
      .merge(
        this.decrease$,
        this.increase$
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
    this.decrease$.next((state) => {
      state.count -= 1;

      return state;
    });
  }

  onClickIncrease() {
    this.increase$.next((state) => {
      state.count += 1;

      return state;
    });
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

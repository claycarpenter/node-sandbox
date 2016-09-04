import React from 'react';
import {Observable, Subject} from 'rxjs';

export class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    // Obvs to represent increase, decrease event streams
    this.decrease$ = new Subject();
    this.increase$ = new Subject();

    // Merge the increase, decrease obvs into a single stream. Sum the results
    // and then subscribe to the output to set a new state for this component.
    Observable
      .merge(this.decrease$, this.increase$)
      .scan((count, value) => count + value, 0)
      .subscribe((count) => this.setState({count}));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.decrease$.next(-1)}>Decrease</button>
        <button onClick={() => this.increase$.next(1)}>Increase</button>
      </div>
    );
  }
}

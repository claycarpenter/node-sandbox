import React from 'react';
import {Counter} from './Counter';
import {Counter2} from './Counter2';
import {DelayCounter} from './DelayCounter';


export class App extends React.Component {
  render() {
    return (
      <div>
        <DelayCounter/>
      </div>
    );
  }
}

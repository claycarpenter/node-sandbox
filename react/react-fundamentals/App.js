import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,
    });
  }

  render() {
    console.log('render');

    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <hr/>
        <Slider ref="red" update={this.update.bind(this)} />
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="input" type="range" min="0" max="255" onChange={this.props.update} />
        <h4>{this.props.txt}</h4>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h4>{props.txt}</h4>
    </div>
  );
};

// App.propTypes = {
//   txt: React.PropTypes.string,
// };
//
// App.defaultProps = {
//   txt: 'This is a default prop value',
// };

export default App

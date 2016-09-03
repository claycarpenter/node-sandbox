import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'this is the state txt',
    };
  }

  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    console.log('render');
    
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <div>{this.state.txt}</div>
      </div>
    );
  }
}

// App.propTypes = {
//   txt: React.PropTypes.string,
// };
//
// App.defaultProps = {
//   txt: 'This is a default prop value',
// };

export default App

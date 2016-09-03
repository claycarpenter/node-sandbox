import React from 'react';

class PropsChildrenApp extends React.Component {
  render() {
    return (
      <Button>I Tolerate React</Button>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    );
  }
}

export default PropsChildrenApp

import React, { Component } from 'react';
import Element from './Element';

class ElementGroup extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Element />
      </div>
    );
  }
}

export default ElementGroup;
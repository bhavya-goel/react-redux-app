import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { value, updateCount } = this.props;
    return (
      <div>
        <>Counter: {value}</>
        <button onClick={() => updateCount(value)}>update counter</button>
      </div>
    );
  }
}

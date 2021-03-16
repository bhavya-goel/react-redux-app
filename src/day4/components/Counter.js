import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from '../slice';

class Counter extends Component {
  render() {
    const { count, id, updateUserCount } = this.props;
    return (
      <div>
        <>Counter: {count}</>
        <button onClick={() => updateUserCount({ id })}>update counter</button>
      </div>
    );
  }
}

export default connect(null, {
  updateUserCount: actions.updateCount,
})(Counter);

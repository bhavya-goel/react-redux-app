import React, { Component } from "react";
import Counter from "./Counter";
import { actions } from '../slice';
import { connect } from "react-redux";

class UserDetails extends Component {
  render() {
    const { addNewUser, updateUserName, user } = this.props;
    return (
      <div>
        <form>
          <label>Username</label>
          <input value={user.name} onChange={
            (event) => updateUserName({ id: user.id, name: event.target.value })
          }></input>
        </form>
        <Counter count={user.count} id={user.id} />
        <button onClick={() => addNewUser()}>Add new user</button>
      </div>
    );
  }
}

export default connect(null, {
  updateUserName: actions.updateName,
  addNewUser: actions.addNewUser,
})(UserDetails);

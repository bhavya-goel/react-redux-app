import React, { Component } from "react";
import Counter from "./Counter";

export default class UserDetails extends Component {
  updateName = event => {
    const name = event.target.value;
    const user = this.props.value;
    this.props.updateUser("name", name, user.id);
  };

  updateCounter = count => {
    const user = this.props.value;
    this.props.updateUser("count", count + 1, user.id);
  };

  render() {
    const { addNewUser, value } = this.props;
    return (
      <div>
        <form>
          <label>Username</label>
          <input value={value.name} onChange={this.updateName}></input>
        </form>
        <Counter value={value.count} updateCount={this.updateCounter} />
        <button onClick={addNewUser}>Add new user</button>
      </div>
    );
  }
}

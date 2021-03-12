import React, { Component } from "react";
import UserDetails from "./UserDetails";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      userCount: 0,
      usersList: [],
    };
  }

  addNewUser = () => {
    this.setState(prevState => ({
      userCount: prevState.userCount + 1,
      usersList: [
        ...prevState.usersList,
        {
          id: prevState.userCount + 1,
          name: "",
          count: 0,
        },
      ],
    }));
  };

  updateUser = (fieldName, fieldValue, userId) => {
    const list = this.state.usersList;
    const newList = list.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          [fieldName]: fieldValue,
        };
      }
      return user;
    });
    this.setState({ usersList: newList })
  };

  render() {
    const { userCount, usersList } = this.state;
    return (
      <div>
        {userCount < 1 ? (
          <button onClick={this.addNewUser}>Add new user</button>
        ) : (
          usersList.map((user, index) => (
            <React.Fragment key={index}>
              <UserDetails
                value={user}
                addNewUser={this.addNewUser}
                updateUser={this.updateUser}
              />
              <hr />
              <br />
            </React.Fragment>
          ))
        )}
      </div>
    );
  }
}

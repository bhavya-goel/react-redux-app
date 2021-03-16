import React, { Component } from "react";
import { connect } from "react-redux";
import UserDetails from "./UserDetails";
import { actions } from '../slice';

class Users extends Component {
  render() {
    const { usersList, addNewUser } = this.props;
    return (
      <div>
        { !usersList.length? (
          <button onClick={() => addNewUser()}>Add new user</button>
        ) : (
          usersList.map((user, index) => (
            <React.Fragment key={index}>
              <UserDetails
                user={user}
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

const mapStateToProps = (state) => ({
  usersList: state.users,
});

export default connect(mapStateToProps, {
  addNewUser: actions.addNewUser
})(Users);

import React, { Component } from "react";

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: "seeker",
      token: ""
    };
  }
  logOut = () => {
    this.setState({ token: "" });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          permission: this.state.permission
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;

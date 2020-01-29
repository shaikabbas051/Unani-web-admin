import React from "react";

import "./style.css";
class Login extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.logins()}>check</button>
      </div>
    );
  }
}
export default Login;

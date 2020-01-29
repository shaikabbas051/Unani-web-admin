import React from "react";
import {
  Card,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button
} from "@material-ui/core";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      authticate: true
    }
  }
  validateCredentials = () => {
    if (this.state.email === "unani@admin.com" && this.state.password === 'unani@123') {

      this.setState({ authticate: true })
      this.props.gotoHome();
    } else {
      this.setState({ authticate: false });
    }
  }
  render() {
    return (
      <div className={"loginComponent"}>
        <Row>
          <Col lg={4} md={6} sm={8} xs="10" className={"logincard"}>
            {/* <div> */}
            <Card>
              <div className={"cardheader"}>unani</div>
              <div className={"cardform"}>
                <div className={"fieldwrapper"}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    {/* <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText> */}
                  </FormControl>
                </div>
                <div className={"fieldwrapper"}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    {/* <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText> */}
                  </FormControl>
                </div>
                <div className={'errormsg'} style={{ visibility: this.state.authticate ? "hidden" : "" }}>Please enter valid credentials</div>
                <Button onClick={() => this.validateCredentials()}>LOGIN</Button>
              </div>
            </Card>
            {/* </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Login;

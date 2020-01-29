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
  render() {
    return (
      <div className={"loginComponent"}>
        <Row>
          <Col lg={5} sm={8} xs={6} className={"logincard"}>
            {/* <div> */}
            <Card>
              <div className={"cardheader"}>unani</div>
              <div className={"cardform"}>
                <div className={"fieldwrapper"}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Product Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText>
                  </FormControl>
                </div>
                <div className={"fieldwrapper"}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Product Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText>
                  </FormControl>
                </div>
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

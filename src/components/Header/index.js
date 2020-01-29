import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

//styles

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={"apptoolbar"}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6">UNANI</Typography>
            <div className={"rightdiv"}>
              <Button
                className={this.props.currentpath == "/form" ? "activeButton" : ""}
                onClick={() => this.props.changeroute("form")}
              >
                Add Product
              </Button>
              <Button
                className={this.props.currentpath == "/products" ? "activeButton" : ""}

                onClick={() => this.props.changeroute("products")}>
                View Products
              </Button>
              <Button>Three</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;

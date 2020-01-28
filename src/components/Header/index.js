import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

//styles

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div >
        <AppBar position="static" >
          <Toolbar className={'apptoolbar'}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" >
              UNANI
          </Typography>
            <div className={'rightdiv'}>
              <Button className={true ? 'activeButton' : ""} onClick={() => this.props.changeroute("products")}>Add Product</Button>
              <Button onClick={() => this.props.changeroute("products")}>View Products</Button>
              <Button>Three</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  username: PropTypes.string
};

export default Header;

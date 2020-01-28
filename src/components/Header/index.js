import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Row, Button, Image } from "react-bootstrap";
import { Breadcrumb } from "antd";
import "antd/dist/antd.css";
import {
  FaBars,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaSignOutAlt
} from "react-icons/fa";

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return(
      <div>Header</div>
    )
  }
}

Header.propTypes = {
  username: PropTypes.string
};

export default Header;

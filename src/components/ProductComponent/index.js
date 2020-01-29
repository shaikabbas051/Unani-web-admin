import React from "react";
import "./style.scss";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

class ProductComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={"productlist"}>
        <div className={"products"}>
          <ListTile />
          <ListTile />
        </div>
      </div>
    );
  }
}

ProductComponent.propTypes = {};
class ListTile extends React.Component {
  render() {
    return (
      <div className={"customlisttile"}>
        <div className={"info"}>Medicine</div>
        <div className={"btns"}>
          <IconButton aria-label="delete" color="primary">
            <CreateIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default ProductComponent;

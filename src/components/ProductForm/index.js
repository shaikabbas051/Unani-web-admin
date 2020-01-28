import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FormControl, InputLabel, FormHelperText, Input, Button } from '@material-ui/core';

class ProductForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className={'productForm'}>
        <div className={'fieldwrapper'}>
          <FormControl>
            <InputLabel htmlFor="my-input">Product Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
        </div>
        <div className={'fieldwrapper'}>
          <FormControl>
            <InputLabel htmlFor="my-input">Product Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
        </div>
        <div className={'fieldwrapper'}>

          <FormControl>
            <InputLabel htmlFor="my-input">Product Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
        </div>
        <Button className={'submitbtn'}>SUBMIT</Button>
      </div>
    )
  }
}

ProductForm.propTypes = {
};

export default ProductForm;

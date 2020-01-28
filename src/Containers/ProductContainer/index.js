/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import ProductComponent from "../../components/ProductComponent";
import { HeaderSelector } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import {
} from "./actions";

export class ProductContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() { }
  componentWillReceiveProps(newProps) { }

  render() {
    return (
      <div>
        <ProductComponent />
      </div>
    );
  }
}
ProductContainer.propTypes = {};
export function mapDispatchToProps(dispatch) {
  return {

  };
}
const mapStateToProps = createStructuredSelector({
  storeData: HeaderSelector()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: "header", reducer });
const withSaga = injectSaga({ key: "header", saga });
export default compose(withReducer, withSaga, withConnect)(ProductContainer);

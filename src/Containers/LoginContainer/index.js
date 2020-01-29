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
import Login from "../../components/Login";
import { LoginSelector } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { replace } from "react-router-redux";

export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }
  componentWillReceiveProps(newProps) { }
  gotoHome = () => {
    this.props.gotoHome();
  };
  render() {
    return (
      <div>
        <Login gotoHome={this.gotoHome} />
      </div>
    );
  }
}
HomePage.propTypes = {};
export function mapDispatchToProps(dispatch) {
  return {
    gotoHome: () => {
      dispatch(replace("/form"));
    }
  };
}
const mapStateToProps = createStructuredSelector({
  storeData: LoginSelector()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: "login", reducer });
const withSaga = injectSaga({ key: "login", saga });
export default compose(withReducer, withSaga, withConnect)(HomePage);

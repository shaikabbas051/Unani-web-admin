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
import HeaderComponent from "../../components/Header";
import { HeaderSelector } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { sample } from "./actions";
import { push } from "react-router-redux";
import { RouteSelector } from "../../Store/rootselector";

export class HeaderContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.props.sample();
  }
  changeroute = path => {
    this.props.changeroute(path);
    // this.props.sample();
  };
  render() {
    console.log(this.props);
    if (
      this.props.routeData.location.pathname &&
      this.props.routeData.location.pathname !== "/"
    ) {
      return (
        <div>
          <HeaderComponent changeroute={this.changeroute} currentpath={this.props.routeData.location.pathname} />
        </div>
      );
    }
    return <div style={{ display: "none" }}></div>;
  }
}
HeaderContainer.propTypes = {};
export function mapDispatchToProps(dispatch) {
  return {
    changeroute: path => dispatch(push(`/${path}`)),
    sample: () => dispatch(sample())
  };
}
const mapStateToProps = createStructuredSelector({
  headerData: HeaderSelector(),
  routeData: RouteSelector()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: "header", reducer });
const withSaga = injectSaga({ key: "header", saga });
export default compose(withReducer, withSaga, withConnect)(HeaderContainer);

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.js";
import HeaderContainer from "./Containers/HeaderContainer/index";
import About from "./Containers/AboutContainer/index";
const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path={"/"} component={App} />
          <Route path={"/about"} component={About} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

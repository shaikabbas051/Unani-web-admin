/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "../LoginContainer";
import HeaderContainer from "../HeaderContainer";
import FormContainer from "../FormContainer";
import ProductContainer from "../ProductContainer";
// import NoMatch from '../NoMatch'

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="UNANI">
        <meta name="description" content="Application" />
      </Helmet>
      {/* <HeaderContainer /> */}
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/form" component={FormContainer} />
        <Route path="/products" component={ProductContainer} />
        {/* <Route path="*" component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

import { createSelector } from "reselect";

const selectroute = state => state.get("route");

const RouteSelector = () =>
  createSelector(selectroute, routestate => {
    if (routestate) {
      return routestate.toJS();
    } else {
      return null;
    }
  });

export { selectroute, RouteSelector };

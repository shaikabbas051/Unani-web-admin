/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from "immutable";
import { ROUTE_CHANGE, SAMPLE } from "./constants";
// The initial state of the App
export const initialState = fromJS({
  currentpath: "/",
  counter: 0
});

export default function HeaderReducer(state, action) {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case ROUTE_CHANGE:
      console.log("route change");
      return initialState;
    case SAMPLE:
      console.log("inside sample");
      return state.set("counter", 1);
    default:
      return state;
  }
}

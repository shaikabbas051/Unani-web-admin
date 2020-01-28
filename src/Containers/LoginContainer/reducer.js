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
import {
  LOGINREQUESTSUCCEEDED,
} from "./constants";
// The initial state of the App
export const initialState = fromJS({
  UserloggedIn: false,
  loginToken: "",
  isLoggedIn: false,
  serviceFailed: false,
  loggedInUserData: "",
  loginFail: false,
  decodedToken: ""
});

function LoginReducer(state, action) {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case LOGINREQUESTSUCCEEDED:
      return state
        .set("loginToken", action.payload.token)
        
    
    default:
      return state;
  }
}

export default LoginReducer;

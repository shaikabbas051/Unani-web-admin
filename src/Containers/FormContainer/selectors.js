/**
 * Homepage selectors
 */

import { createSelector } from "reselect";

const selectheader = state => state.get("header");

const HeaderSelector = () =>
  createSelector(selectheader, headerstate => {
    if (headerstate) {
      return headerstate.toJS();
    } else {
      return null;
    }
  });

export { selectheader, HeaderSelector };

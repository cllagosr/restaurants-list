/* eslint-disable react/prop-types, no-duplicate-imports */

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers";

function render(
  ui,
  {
    initialState = {},
    store = createStore(
      reducers,
      initialState,
      compose(applyMiddleware(thunkMiddleware))
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

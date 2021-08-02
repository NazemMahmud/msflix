import React from "react";
/** 
 * allows simple asynchronous use of dispatch; 
 * can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. */
import thunk from "redux-thunk"; 
import { Provider } from "react-redux";
import { createBrowserHistory } from "history"; // manage session history 
import { applyMiddleware, createStore } from "redux";
/**
 * Redux binding for React Router
 * Synchronize router state with redux store through uni-directional flow (i.e. history -> store -> router -> components)
 * access routing state
 */
import { routerMiddleware, ConnectedRouter } from "connected-react-router"; // ??

import rootReducer from "./Reducer";

/**
 *
 * @param children => element inside Root tag
 * @param initialState => at starting = empty obj
 * @returns {*}
 * @constructor
 */
const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory(); // get browser related data
  const middleware = [thunk, routerMiddleware(history)];
  console.log('middleware: ', middleware);
  console.log('history: ', history);
  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}> {children} </ConnectedRouter>
    </Provider>
  );
};

export default Root;
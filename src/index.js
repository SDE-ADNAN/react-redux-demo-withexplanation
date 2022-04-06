import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//importing the store first
import store from "./store";

//importing the provider from react-redux to provide the store to the App component
//==========================================================================================
// Explanation for Provider
// (alias) class Provider<A extends Action<any> = AnyAction>
// import Provider
// Makes the Redux store available to the connect() calls in the component hierarchy below.
//==========================================================================================

import { Provider } from "react-redux";


// the store .subscribe() method is used for getting the State of the  store by using the store.getState method..

store.subscribe(() => {
  console.log(store.getState);
});

ReactDOM.render(
    // On line no.30 using the Provider to pass store to the descendant components 
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

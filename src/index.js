import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import Header from "./common/Header";
import SignIn from "./common/SignIn";
import SignUp from "./common/SignUp";
import Profile from "./common/Profile";
import EditProfile from "./common/EditProfile";
import * as serviceWorker from "./serviceWorker";

const Routing = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/edit" component={EditProfile} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store()}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

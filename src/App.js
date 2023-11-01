import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <PrivateRoute path="/friends/add/">
          <div>friendadd form</div>
        </PrivateRoute>
        <PrivateRoute path="/friends/">
          <div>friends div</div>
        </PrivateRoute>
        <Route path="/login/">
          <Login />
        </Route>
        <Route path="/logout/">
          <div>Logout</div>
        </Route>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";
import { Switch, Route } from "react-router-dom";
import AddFriend from "./components/AddFriend";
import Friend from "./components/Friend";
function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <PrivateRoute path="/friends/add/">
          <AddFriend />
        </PrivateRoute>
        <PrivateRoute path="/friends/:friendId/">
          <Friend />
        </PrivateRoute>
        <PrivateRoute path="/friends/">
          <FriendList />
        </PrivateRoute>
        <Route path="/logout/">
          <div>Logout</div>
        </Route>
        <Route path="/login/">
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

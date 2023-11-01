import React,{useContext} from "react";
import {Route,Redirect} from "react-router-dom"
import {AuthContext} from "../context/AuthContext"
export default function PrivateRoute({ children, ...rest }) {
    //let auth = useAuth();
   // const {auth}=rest;
   const {auth} =useContext(AuthContext);
   return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.username ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


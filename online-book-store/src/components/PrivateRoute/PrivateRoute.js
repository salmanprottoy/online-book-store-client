import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggerInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

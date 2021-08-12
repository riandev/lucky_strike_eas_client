import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../../App";

const PrivateRouteAdmin = ({ children, ...rest }) => {
  const [adminInfo, setAdminInfo] = useContext(userContext);

  const admin = sessionStorage.getItem("admin");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        adminInfo.email || admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouteAdmin;

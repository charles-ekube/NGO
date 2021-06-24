import React from "react";
import { Route } from "react-router-dom";

const AppRoutes = ({ component: Component, path, ...rest }) => {
  return (
    <Route path={path} render={(props) => <Component {...props} />} {...rest} />
  );
};

export default AppRoutes;

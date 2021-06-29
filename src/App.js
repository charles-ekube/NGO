import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoutes from "./components/approutes";
import routes from "./config/routes";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;

import { useKeycloak } from "@react-keycloak/web";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "../components/Menu";
import HomePage from "../pages/HomePage";
import { PrivateRoute } from "../utilities/PrivateRoute";
import ProtectedPage from "../pages/ProtectedPage";

export const AppRouter = () => {
  const [, initialized] = useKeycloak();
  console.log(initialized);
  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute
            roles={["app-admin"]}
            path="/protected"
            component={ProtectedPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

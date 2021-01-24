import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routesPages, routesSecondaryPages } from "../../routes/routes";
import Layout from "../Tmdb/Layout/Layout";
import LoaderSpinner from "../Tmdb/Loader/LoaderSpinner";

const Tmdb = () => {
  return (
    <Layout>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          {routesPages.map(({ path, exact, component: Page }) => {
            return (
              <Route
                path={path}
                key={path}
                exact={exact}
                render={(props) => <Page {...props} />}
              />
            );
          })}

          {routesSecondaryPages.map(({ path, exact, component: Page }) => {
            return (
              <Route
                path={path}
                key={path}
                exact={exact}
                render={(props) => <Page {...props} />}
              />
            );
          })}

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default Tmdb;

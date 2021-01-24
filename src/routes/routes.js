import { lazy } from "react";

export const routesPages = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage"*/)
    ),
  },
  {
    path: "/movies",
    name: "Movies",
    exact: true,
    component: lazy(() =>
      import("../pages/MoviePage" /* webpackChunkName: "MoviesPage"*/)
    ),
  },
];

export const routesSecondaryPages = [
  {
    path: "/movies/:movieId",
    name: "MovieDetailsPage",
    exact: false,
    component: lazy(() =>
      import(
        "../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/
      )
    ),
  },
];

export const routesAdditional = [
  {
    path: "/cast",
    name: "Cast",
    exact: false,
    component: lazy(() =>
      import(
        "../components/Tmdb/AdditionalInfo/Cast/Cast" /* webpackChunkName: "Cast"*/
      )
    ),
  },
  {
    path: "/reviews",
    name: "Reviews",
    exact: false,
    component: lazy(() =>
      import(
        "../components/Tmdb/AdditionalInfo/Reviews/Reviews" /* webpackChunkName: "Reviews"*/
      )
    ),
  },
];

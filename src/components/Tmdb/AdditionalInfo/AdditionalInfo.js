import { Component, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import LoaderSpinner from "../Loader/LoaderSpinner";
import { routesAdditional } from "../../../routes/routes";
import { getMovieCredits, getMovieReviews } from "../../../services/movieApi";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  ul {
    display: flex;
  }

  .list:not(:last-child) {
    margin-right: 10px;
  }

  .link {
    color: yellow;
  }

  .active {
    color: pink;
  }
`;

class MovieAdditional extends Component {
  state = {
    cast: [],
    reviews: [],
  };

  getHandleInfo = () => {
    const { match } = this.props;
    const id = match.params.movieId;

    getMovieCredits(id)
      .then((cast) => this.setState({ cast: cast }))
      .catch((error) => console.log(error));

    getMovieReviews(id)
      .then((results) => this.setState({ reviews: results }))
      .catch((error) => console.log(error));
  };

  render() {
    const { match } = this.props;
    const { cast, reviews } = this.state;

    return (
      <>
        <Div>
          <h3>Additional information:</h3>

          <nav>
            <ul>
              {routesAdditional.map(({ path, name }) => (
                <li className="list" key={path}>
                  <NavLink
                    className="link"
                    activeClassName="active"
                    to={`${match.url}/${name}`}
                    onClick={this.getHandleInfo}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Div>

        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            {routesAdditional.map(({ path, exact, component: Page, name }) => {
              const routePath = path.slice(1);

              return (
                <Route
                  key={name}
                  path={`${match.url}${path}`}
                  exact={exact}
                  render={(props) => (
                    <Page
                      infoArr={routePath === "cast" ? cast : reviews}
                      {...props}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieAdditional;

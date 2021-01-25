import { Component } from "react";
import { Link } from "react-router-dom";
import Searchbox from "../components/Tmdb/Searchbox/Searchbox";
import LoaderSpinner from "../components/Tmdb/Loader/LoaderSpinner";
import { getQueryParams } from "../utils/getQueryParams";
import { getSearchMovies } from "../services/movieApi";
import styled from "styled-components";

const Ul = styled.ul`
  .list:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const List = styled(Link)`
  color: honeydew;
  font-size: 18px;
`;

class MoviesPage extends Component {
  state = {
    searchList: [],
    loading: false,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, _) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });

      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    if (query === "") {
      return;
    }

    getSearchMovies(query)
      .then((results) => {
        this.setState({
          searchList: results,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { searchList, loading } = this.state;
    const { match, location } = this.props;

    return (
      <main>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {loading ? (
          <LoaderSpinner />
        ) : (
          searchList.length > 0 && (
            <Ul>
              {searchList.map((item) => (
                <li className="list" key={item.id}>
                  <List
                    to={{
                      pathname: `${match.url}/${item.id}`,
                      state: { from: location },
                    }}
                  >
                    {item.title}
                  </List>
                </li>
              ))}
            </Ul>
          )
        )}
      </main>
    );
  }
}

export default MoviesPage;

import { Component } from "react";
import TrendingMovies from "../components/Tmdb/TrendingList/TrendingList";
import { getTrendingMovies } from "../services/movieApi";
import LoaderSpinner from "../components/Tmdb/Loader/LoaderSpinner";
import styled from "styled-components";

const Main = styled.main`
  h1 {
    font-size: 48px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

class HomePage extends Component {
  state = {
    trandingList: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    getTrendingMovies()
      .then((results) => {
        this.setState({
          trandingList: [...results],
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { trandingList, loading } = this.state;

    return (
      <Main>
        <h1>TMDb</h1>

        <h2>Trending today:</h2>

        {loading && <LoaderSpinner />}

        {trandingList.length && <TrendingMovies trandingList={trandingList} />}
      </Main>
    );
  }
}

export default HomePage;

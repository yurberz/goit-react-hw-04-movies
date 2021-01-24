import { Component } from "react";
import AdditionalInfo from "../components/Tmdb/AdditionalInfo/AdditionalInfo";
import { getMovieDetails } from "../services/movieApi";
import styled from "styled-components";

const Main = styled.main`
  font-size: 18px;

  .cardWrapper {
    display: flex;
    margin-bottom: 20px;
  }

  .img {
    margin-right: 15px;
  }

  .cardInfo {
    h2 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .infoList:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    margin-bottom: 10px;
    align-items: center;
    outline: none;
    border-radius: 4px;
    min-width: 28px;
    height: 30px;
    background-color: honeydew;
    color: black;
    font-weight: 500;
    font-size: 12px;
  }
`;

class MovieDetailsPage extends Component {
  state = {
    movie: {
      title: "",
      score: "",
      overview: "",
      genres: [],
      posterSrc: "",
    },
    from: "",
    search: "",
  };

  componentDidMount() {
    const { match, location } = this.props;
    const id = match.params.movieId;

    getMovieDetails(id)
      .then(({ title, vote_average, overview, genres, poster_path }) => {
        this.setState({
          movie: {
            title: title,
            score: vote_average,
            overview: overview,
            genres: genres,
            posterSrc: poster_path,
          },
        });
      })
      .catch((error) => console.log(error));

    location.state?.from &&
      this.setState({
        from: location.state.from.pathname,
        search: location.state.from.search,
      });
  }

  handleGoBack = () => {
    const { from, search } = this.state;
    const { history } = this.props;

    from && search ? history.push(`${from}${search}`) : history.push("/");
  };

  render() {
    const { movie } = this.state;
    const { title, score, overview, genres, posterSrc } = movie;

    return (
      <Main>
        <button type="button" onClick={this.handleGoBack}>
          💩 Back
        </button>

        <div className="cardWrapper">
          <div className="img">
            {posterSrc && (
              <img
                src={`https://image.tmdb.org/t/p/original/${posterSrc}`}
                alt={title}
                width="400"
              />
            )}
          </div>
          <div className="cardInfo">
            <h2>{title}</h2>

            <ul>
              <li className="infoList">
                <p>User Score:</p>
                <p>{score}</p>
              </li>
              <li className="infoList">
                <p>Overview:</p>
                <p>{overview}</p>
              </li>
              <li className="infoList">
                <p>Genres:</p>
                <p>
                  {genres.map((genre) => (
                    <span key={genre.id}>"{genre.name}"</span>
                  ))}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <AdditionalInfo {...this.props} />
      </Main>
    );
  }
}

export default MovieDetailsPage;

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "9804ef97b38cd854dc578c99a6d1df08",
  language: "en-EN",
};

export const getTrendingMovies = async () => {
  try {
    const res = await axios.get(`/trending/movie/day`);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async (query) => {
  try {
    const res = await axios.get(`/search/movie?query=${query}`);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const res = await axios.get(`/movie/${movieId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const res = await axios.get(`/movie/${movieId}/credits`);
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const res = await axios.get(`/movie/${movieId}/reviews`);

    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

import { movieapikey } from "./apikey";
import axios from "axios";

// Endpoints
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${movieapikey}`;
const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${movieapikey}`;
const upComingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${movieapikey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${movieapikey}`;
const genresEndpoint = `${apiBaseUrl}/genre/movie/list?api_key=${movieapikey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${movieapikey}`;

// Movie Details Endpoint
const movieDetailsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}?api_key=${movieapikey}`;

const movieCreditsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${movieapikey}`;

const similarMoviesEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${movieapikey}`;


const personDetailsEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}?api_key=${movieapikey}`;

const personMovieEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${movieapikey}`;

// Api call to get  movies

const movieApiCall = async (endpoints, params) => {
  const options = {
    method: "GET",
    //   url: "https://api.themoviedb.org/3/trending/movie/day?717ccf6765dcaa577801cadcc372f394",
    url: endpoints,
    // params: { language: "en-US" },
    params: params ? params : {},
    headers: {
      accept: "application/json",
      Authorization:
        //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTdjY2Y2NzY1ZGNhYTU3NzgwMWNhZGNjMzcyZjM5NCIsInN1YiI6IjY1NDEwYTQ1NjNlNmZiMDEzYzFkNmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Ny4pxy9uBHbjAgST-LXBy4zGNzO2xkdfkHZD5QHb2U",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTdjY2Y2NzY1ZGNhYTU3NzgwMWNhZGNjMzcyZjM5NCIsInN1YiI6IjY1NDEwYTQ1NjNlNmZiMDEzYzFkNmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Ny4pxy9uBHbjAgST-LXBy4zGNzO2xkdfkHZD5QHb2U",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("this is the res", response);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// Functions to get Images of different sizes and width
export const image500 = (posterpath) =>
  posterpath ? "https://image.tmdb.org/t/p/w500" + posterpath : null;

// Home Screen Apis
export const fetchTrendingMovie = () => {
  return movieApiCall(trendingMoviesEndpoint);
};

export const fetchPopularMovie = () => {
  return movieApiCall(popularMoviesEndpoint);
};

export const fetchUpComingMovie = () => {
  return movieApiCall(upComingMoviesEndpoint);
};

export const fetchTopRatedMovie = () => {
  return movieApiCall(topRatedMoviesEndpoint);
};

export const fetchGenres = () => {
  return movieApiCall(genresEndpoint);
};

export const fetchMovieDetails = (id) => {
  return movieApiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = (movieId) => {
  return movieApiCall(movieCreditsEndpoint(movieId));
};

export const fetchSimilarMovies = (movieId) => {
  return movieApiCall(similarMoviesEndpoint(movieId));
};

export const searchMovies = (params) => {
  return movieApiCall(searchMoviesEndpoint, params);
};

// Cast functions to fetch data
export const fetchPersonDetails = (id) => {
  return movieApiCall(personDetailsEndpoint(id));
};

export const fetchPersonMovies = (id) => {
  return movieApiCall(personMovieEndpoint(id));
};

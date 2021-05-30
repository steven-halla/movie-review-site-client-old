import axios, {AxiosResponse} from 'axios';
import {authHeader} from "./authHeader";
import {Movie, MovieReview, MovieReviewUpdateRequest} from "model/Movie";

const API_URL = `http://localhost:7777`;

export const getAllMovies = (): Promise<AxiosResponse<Movie[]>> => {
  return axios.get(API_URL + `/movies`, {headers: authHeader()});
};

export const getMovie = (movieId: number): Promise<AxiosResponse<Movie>> => {
  return axios.get(API_URL + `/movies/${movieId}`, {headers: authHeader()});
};

export const updateMovie = (movie: Movie): Promise<AxiosResponse<Movie>> => {
  return axios.put(API_URL + `/movies/${movie.id}`, movie, {headers: authHeader()});
};

export const createMovie = (movie: Movie): Promise<AxiosResponse<Movie>> => {
  return axios.post(API_URL + `/movies`, movie, {headers: authHeader()});
};

export const getMovieReviews = (movieId: number): Promise<AxiosResponse<MovieReview[]>> => {
  return axios.get(API_URL + `/movies/${movieId}/reviews`);
};

//we pass in movieId but never use it I wonder if I can delete it from line 24.
// pass in review on line 24
export const updateMovieReview = (request: MovieReviewUpdateRequest): Promise<AxiosResponse<MovieReview>> => {
  return axios.patch(API_URL + `/movies/${request.movieId}/reviews`, request, {headers: authHeader()});
};

export const deleteMovieReview = (movieReviewId: number): Promise<AxiosResponse<MovieReview>> => {
  return axios.delete(API_URL + `/movies/reviews/${movieReviewId}`, {headers: authHeader()});
}
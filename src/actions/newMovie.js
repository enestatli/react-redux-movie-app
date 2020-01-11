import axios from "axios";
import { API_BASE } from "../config/env";

export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export function onNewMoviewSubmit({ title, cover }) {
  console.log(title, cover);
  return dispatch => {
    dispatch({
      type: "NEW_MOVIE",
      payload: axios
        .get(`${API_BASE}/movies`)
        .then(result => result.data.movies)
    });
  };
}

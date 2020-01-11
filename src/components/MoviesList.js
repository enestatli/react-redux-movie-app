import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { HashLoader } from "react-spinners";

import MovieCard from "./MovieCard";

//rafcp
const MoviesList = ({ movies }) => {
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = (
    <div>
      <HashLoader size={40} color={"#36bdb3"} loading={movies.fetching} />
      {movies.error.response ? (
        <h3>Retrieving data</h3>
      ) : (
        <Grid stackable columns={3}>
          {movies.movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </Grid>
      )}
    </div>
  );

  return <div> {movies.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired
  }).isRequired
};

export default MoviesList;

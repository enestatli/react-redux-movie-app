import React from "react";
import PropTypes from "prop-types";

//rafcp
const MoviesList = ({ movies }) => {
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = (
    <div>
      {movies.error.response ? <h3>Retrieving data</h3> : <h3>HATA YOK</h3>}
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

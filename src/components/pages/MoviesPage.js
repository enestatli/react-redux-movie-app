import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import MoviesList from "../MoviesList";
import { fetchMovies } from "../../actions/movies";

class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log("hello");
    this.props.fetchMovies();
  }
  render() {
    return (
      <div>
        <h2>Movies Page </h2>
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};

const mapDispatchToProps = {
  fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);

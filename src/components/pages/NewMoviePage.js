import React, { Component } from "react";
import { connect } from "react-redux";

import NewMovieForm from "../NewMovieForm";
import { onNewMoviewSubmit } from "../../actions/newMovie";

class NewMoviePage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <NewMovieForm onNewMoviewSubmit={this.props.onNewMoviewSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({ newMovie }) => {
  return {
    newMovie
  };
};

const mapDispatchToProps = {
  onNewMoviewSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);

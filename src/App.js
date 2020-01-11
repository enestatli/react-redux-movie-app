import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

import MoviesPage from "./components/pages/MoviesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewMoviePage from "./components/pages/NewMoviePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Container text>
          <Route exact path="/movies" component={MoviesPage}></Route>
          <Route exact path="/movies/new" component={NewMoviePage}></Route>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

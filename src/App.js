import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//--Pages
import Navbar from './components/navbar';
// import Search from './components/search';
// import Home from './containers/home';
// import Movies from './containers/movies';
// import Genres from './containers/genres';
// import Id from './containers/id';


class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      {/* <Search /> */}
      {/* <Route path="/" exact component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/genres" component={Genres} />
      <Route path="/id" component={Id} /> */}
      </>
    );
  }
}

export default App;

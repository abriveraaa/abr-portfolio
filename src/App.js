import "./App.scss";
import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import Profile from "./containers/pages/Profile";
import Project from "./containers/pages/Project";
import Skill from "./containers/pages/Skill";
import Footer from "./containers/pages/Footer";

class App extends Component {
  render () {
    return (
        <div className="App">
          <Navigation/>
          <main className="main__container">
            <Profile />
            <Project />
            <Skill />
          </main>
            <Footer />
        </div>
    );
  }
}
export default App;
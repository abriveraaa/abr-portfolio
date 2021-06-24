import "./App.scss";
import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import Profile from "./containers/pages/Profile";
import Project from "./containers/pages/Project";
import Skill from "./containers/pages/Skill";
import Contact from "./containers/pages/Contact";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Solid from '@fortawesome/free-solid-svg-icons';
import * as Brand from '@fortawesome/free-brands-svg-icons';

const iconSolid = Object
.keys(Solid)
.filter(key => key !== "" && key !== "prefix" )
.map(icon => Solid[icon])

const iconBrand = Object
.keys(Brand)
.filter(key => key !== "" && key !== "prefix" )
.map(icon => Brand[icon])

library.add(...iconSolid)
library.add(...iconBrand)

class App extends Component {
  render () {
    return (
      <div className="main">
        <Navigation/>
        <Profile />
        <main className="main__container">
          <Project />
          <Skill />
        </main>
          <Contact />
      </div>
    );
  }
}
export default App;
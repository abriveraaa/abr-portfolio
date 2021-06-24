import "./App.scss";
import React, { useEffect, useState } from 'react';
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


const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(result){
        return result.json();
      })
      .then(function(data) {
        setData(data);
      });
  }

  useEffect(()=>{
    getData()
  },[])

  return(
    <div className="main">
      <Navigation/>
      <Profile data={ data } />
      <main className="main__container">
        <Project data={ data.projects }/>
        <Skill data={ data.skills }/>
      </main>
        <Contact data={ data }/>
    </div>
  );
}

export default App;
import React from "react";
import { Header } from "./components/Header/index";
import "boxicons";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Pages} from "./components/Pages/pages.jsx";
//import {Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Pages/> 
      </Router>
     
      </div>
      
  );
}

export default App;

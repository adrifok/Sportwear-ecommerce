import React from "react";
import { Header } from "./components/Header";
import "boxicons";
import {BrowserRouter as Router} from "react-router-dom";
import {Pages} from "./components/Pages/pages.jsx";
import {DataProvider} from "../src/context/DataProvider.jsx";
import {Cart} from "./components/Cart/index.jsx";


function App() {
  return (
     <DataProvider>
      {/* los componentes hijos pueden usar el DataProvider y la variable de value que hicimos del tipo global */}

    <div className="App">
      <Router>
      <Header/>
      <Cart/>
        <Pages/> 
      </Router>
     
      </div>
    </DataProvider>
      
  );
}

export default App;

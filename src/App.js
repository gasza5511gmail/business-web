import React from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import About from "./components/About";
import Products from "./components/Products"
function App() {
  return (
    <div className="App">
        <Header/>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
       

        <Footer/>
      
    </div>
  );
}

export default App;

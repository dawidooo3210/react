import React, {useState} from 'react';
import logo from './logo.svg';
// import Card from './components/card';
import './App.css';
import SearchBar from './components/searchbar';
import Home from './Sites/Home';
import About from './Sites/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const products = [
  {  price: 125, title: "rurzowe japko" },
  {  price: 100, title: "rzułte japko"}];



function App() {
  return (
    <>
      <div>tekst</div>
      <Router>
          <Link to="/about"> Do about</Link>
        <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about/:id" exact>
              <About/>
            </Route>
        </Switch>
      </Router>
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    </>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
// import Card from './components/card';
import './App.css';
import SearchBar from './components/searchbar';

const products = [
  {  price: 125, title: "rurzowe japko" },
  {  price: 100, title: "rzułte japko"}];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BuisnessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar />
    <BusinessList /> 
  </div>
  );
}

export default App;

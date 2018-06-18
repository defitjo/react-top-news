import React, { Component } from 'react';
import NewsItem from './NewsItem';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top News of the Day</h1>
        </header>
        <div className="Top-news">
          <NewsItem />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './HomePage/Header';
import Content from './HomePage/Content';
import HomePage from './NewType/HomePage';


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <HomePage/>
      </>
    );
  }
}

export default App;

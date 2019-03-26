import React, { Component } from 'react';
import Header from './HomePage/Header';
import Content from './HomePage/Content';
import Intro from './HomePage/Intro';


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Intro/>
      <Content/>
      </>
    );
  }
}

export default App;

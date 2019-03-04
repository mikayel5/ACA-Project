import React, { Component } from 'react';
import Header from './HomePage/Header';
import Content from './HomePage/Content';
import Block from './Block';


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Content/>
      <Block/>

      </>
    );
  }
}

export default App;

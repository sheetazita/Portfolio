import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Skills />
        <Works />
      </div>
    )
  }
}

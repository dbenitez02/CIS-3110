import React, { Component } from 'react';
import './App.css';
import Items from './components/items';

class App extends Component {


  render() {
    return (
      <div classname="container">
        <h1 classname="text-center">Beginning React.js</h1>
        <Items />
      </div>
    );
  }
}
 
export default App;

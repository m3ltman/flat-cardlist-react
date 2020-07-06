import React, { Component} from 'react';
import {hot} from 'react-hot-loader';
import CardList from '../js/components/CardList';

class App extends Component{
  render(){
    return(
      <div className="app">
        <CardList />
      </div>
    );
  }
}

export default hot(module)(App);
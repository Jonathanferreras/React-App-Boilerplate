import React, { Component } from 'react';
import { Counter } from './components';

class App extends Component {

  render(){
    return(
      <div id="App">
        <h1>Hello World!</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
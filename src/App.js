import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routers/Index'
import {observer} from "mobx-react";

@observer
class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Routes/>
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';
import Button from './Button';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fiori Elements Wizard!</h1>
        </header>
        <p className="App-intro">Let's get started...</p>
        <div 
          style={{ display:"flex", flexDirection:"row", justifyContent: "space-around"}}
        >
          <Button name="Skip Wizard (Advanced Users)"/>
          <Button name="Follow the Wizard!"/>
        </div>
      </div>
    );
  }
}

export default App;
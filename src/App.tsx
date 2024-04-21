// https://blog.logrocket.com/how-to-use-typescript-react-tutorial-examples/

import React from 'react';
import FirstComponent from "./components/FirstComponent";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello, Welcome to React and TypeScript</h1>
        <FirstComponent />
      </header>
    </div>  );
}

export default App;

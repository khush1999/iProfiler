import React from 'react';
import logo from './logo.svg';
import './App.css';
declare global {
  interface Window {
      token:any;
  }
}

let token = window.token;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Token = {token}</p>
        <form action = "/" method = "POST"
         encType = "multipart/form-data">
         <input type = "file" name = "file" />
         <input type = "submit"/>
        </form>
      </header>
    </div>
  );
}

export default App;

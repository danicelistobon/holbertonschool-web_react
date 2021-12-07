import React from 'react';
import logo from './holberton_logo.jpg';

import './App.css';

const App = () => {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  )
}

export default App;

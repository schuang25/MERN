import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import LoginReg from './components/LoginReg';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginReg />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

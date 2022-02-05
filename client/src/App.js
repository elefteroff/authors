import './App.css';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import New from './components/new';
import Edit from './components/edit';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <h3>Favorite Authors</h3>
      <Switch>

        <Route exact path="/edit/:id">
          <Edit />
        </Route>

        <Route exact path="/new">
          <New />
        </Route>

        <Route exact path="/">
          <Dashboard />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
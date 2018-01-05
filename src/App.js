import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home.jsx';
// imports home page from pages folder for routing 

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path ="/" component={Home}>  </Route>
            </div>
        </Router>
    );
  }
}

export default App;

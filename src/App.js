import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
// imports home page from pages folder for routing

import About from './pages/About.jsx';
// second page "about"

import Contact from './pages/Contact.jsx';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path ="/" component={Home}>  </Route>
                <Route path="/about" component={About}> </Route>
                <Route path="/contact" component={Contact}> </Route>
            </div>
        </Router>
    );
  }
}

export default App;

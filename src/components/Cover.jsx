import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cover.css';

class Cover extends Component{
    render() {
        return (
                        <cover className="cover">
                <div className="container">
            <body>

    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">

          <header className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Cover</h3>
              <nav className="nav nav-masthead">
                <a className="nav-link active" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Contact</a>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
            </p>
          </main>

          <footer className="mastfoot">
            <div className="inner">
              <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
          </footer>

        </div>

      </div>

    </div>
</body>
                </div>
                        </cover>

        );
    }
}

export default Cover
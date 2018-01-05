import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from "../components/Jumbotron.jsx";
import Album from "../components/Album.jsx";


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Welcome" subtitle="Portfolio Cameron Tran"/>
                <div className="container">
                    <h2>Welcome</h2>
                    <img src={require('../imgs/resume.png')} />
                    <h2>Projects</h2>
                </div>
                <Album />
            </div>
        );
    }
}

export default Home
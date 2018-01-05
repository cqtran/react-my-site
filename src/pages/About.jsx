import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from "../components/Jumbotron.jsx";



class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="About" subtitle="About subtitle"/>
                <div className="container">
                    <h2>About </h2>
                    <p>My name is Cameron Tran. A final year computing science student at the University of Alberta! This website was created to test out the react framework (library).</p>
                    <p>I am seeking an entry level position as a software developer to apply technical knowledge, expand skill set, and contribute to the goals of the company. Most notable skills include development of web and mobile applications for both client and personal use. Please enjoy my site!</p>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default About
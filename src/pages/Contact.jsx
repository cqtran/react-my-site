import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from "../components/Jumbotron.jsx";



class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Contact" subtitle="Information"/>
                <div className="container">
                    <h2>Contact Information</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                    <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact
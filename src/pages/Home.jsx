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
                <Jumbotron title="Welcome" subtitle="Salutations everyone"/>
                <div className="container">
                    <h2>Welcome</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                    <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                    <h2>A few of my Projects</h2>
                </div>
                <Album />
                <Footer />
            </div>
        );
    }
}

export default Home
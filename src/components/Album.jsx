import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup } from 'reactstrap';
import './Album.css';

class Album extends Component{
    render(){
        return(
    <div className="container">
        <CardGroup>
          <Card>
            <CardImg top width="100%" src="https://i.ytimg.com/vi/8YIqtiUu9Xk/hqdefault.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Cavalry Fence App</CardTitle>
              <CardText>Cavalry Fence Builder is a web app for fence installation companies. It allows a fence business to track projects and financial data, calculate quotes, generate material lists, and send quotes to clients and material lists to suppliers.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button onclick="window.location.href='http://www.hyperlinkcode.com/button-links.php'">Button</Button>
            </CardBody>
          </Card>
        </CardGroup>
    </div>
        );
    }
}

export default Album
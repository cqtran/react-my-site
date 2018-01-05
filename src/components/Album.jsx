import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup } from 'reactstrap';
import './Album.css';

class Album extends Component{
    render(){
        return(
    <div className="container">
        <div className="row">
        <CardGroup>
          <Card>
            <CardImg top width="100%" src="https://i.ytimg.com/vi/8YIqtiUu9Xk/hqdefault.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Cavalry Fence App</CardTitle>
              <CardText>Cavalry Fence Builder is a web app for fence installation companies. It allows a fence business to track projects and financial data, calculate quotes, generate material lists, and send quotes to clients and material lists to suppliers.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/08/Android-Device-Manger-lockscreen-options-DSC06383.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Everything Silvia</CardTitle>
              <CardText>iOS application written in Swift that supplies users with repair and maintenance information for the Nissan silvia</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://cloud.githubusercontent.com/assets/25045046/22404157/732d639a-e5e8-11e6-9e77-c2f9022dccde.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Initial D HD</CardTitle>
              <CardText>Game developed on Unity
                2D vertical platformer game written for hackED 2017 in 24 hours
                Displays heavy use of UI, scripts, and texture packs.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
        </div>
    </div>
        );
    }
}

export default Album
import React, { Component } from 'react';

import upcomingImage from "./../Campaigns/upcoming.png";
import currentImage from "./../Campaigns/current.jpeg";
import closedImage from "./../Campaigns/closed.jpeg";
import rejectedImage from "./../Campaigns/rejected.jpg";
import Login from './../Login';
import './style.css';
import _ from 'lodash';
import { Card, Image, Grid } from 'semantic-ui-react';

class Campaigns extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="campaign">
        <h3>Campaigns page</h3>
        <Grid >
          <Grid.Row>
            <Grid.Column width={4}>
              <Card href='#card-example-link-card' raised="true">
                <Image size="massive" src={currentImage} />
                <Card.Content>
                  <Card.Header>Current</Card.Header>
                  <Card.Meta>2018</Card.Meta>
                  <Card.Description>Description</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column stretched width={3}>
              <Card href='#card-example-link-card' raised="true">
                <Image centered size="small" src={upcomingImage} />
                <Card.Content>
                  <Card.Header>Upcoming</Card.Header>
                  <Card.Meta>2019</Card.Meta>
                  <Card.Description>Description</Card.Description>
                </Card.Content>

              </Card>
              <br />
              <Card href='#card-example-link-card' raised="true">
                <Image centered size="small" src={closedImage} />
                <Card.Content>
                  <Card.Header>Closed</Card.Header>
                  <Card.Meta>2017</Card.Meta>
                  <Card.Description>Description</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>

              <Card href='#card-example-link-card' raised="true">
                <Image centered size="small" src={rejectedImage} />
                <Card.Content>
                  <Card.Header>Rejected</Card.Header>
                  <Card.Meta>2017</Card.Meta>
                  <Card.Description>Description</Card.Description>
                </Card.Content>
              </Card>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default (Campaigns);



import React, { Component } from 'react';
import './style.css';

import { Card,Image,Feed,Button } from 'semantic-ui-react';
import _ from 'lodash';

import ether from "./../AccountHome/ether.ico";
import usd from "./../AccountHome/usd.png";
import invested from "./../AccountHome/invested.jpg";
import Interested from "./../AccountHome/interested.png";
import PropTypes from "prop-types";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility,
ThumbUp,
AttachMoney,
BusinessCenter,
ConfirmationNumber
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";
import StatsCard from "./StatsCard";
import ItemGrid from "./ItemGrid";

class AccountHome extends Component {



	
	render() {
		const { classes } = this.props;
		return (
<div className="accounthome">
			<div class="campaign">
		 <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ConfirmationNumber}
              iconColor="orange"
              title="
              Total Tokens"
              description="100"
              small="Tokens"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: "Get More tokens...", href: "#pablo" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={AttachMoney}
              iconColor="green"
              title="Total USD invested"
              description="$5000"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={BusinessCenter}
              iconColor="red"
              title="
              Number of campaigns invested"
              description="10"
              statIcon={LocalOffer}
              statText="Tracked from Account"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ThumbUp}
              iconColor="blue"
              title="
              Interested campaigns"
              description="+5"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
		
    </div>
</div>		

		);

	}
}

AccountHome .propTypes = {
	classes: PropTypes.object.isRequired,
  };
export default (AccountHome );




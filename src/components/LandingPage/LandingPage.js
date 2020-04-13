import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

import { connect } from "react-redux";

import './LandingPage.css';

class LandingPage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: "GET_ALL_ART"
        });
    }

    render() {
        return (
            <div className="landing-page-wrapper">
                {this.props.reduxState.setArt.map(item => {
                    return (
                        <Card>
                            <Image src={item.image_url} />
                            <Card.Content textAlign="right">
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Description>{item.artist}</Card.Description>
                            </Card.Content>
                        </Card>
                        )}
                    )
                }
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);
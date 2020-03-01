import React from 'react';
import './Bedrock.css';
import { Column, Row } from 'simple-flexbox';
import LoadSpinner from './Components/Props/LoadSpinner/LoadSpinner';
import Main from './Components/Main/Main';
import LoginScreen from './Components/Login/LoginScreen';
import './fonts/PixelOperatorHB8.ttf';

export default class Bedrock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            domain: `localhost:8080/backend/V1`,
            hasLoggedIn: false,
        };
    }

    render() {
        return (
            <div id='root'>
                {this.state.hasLoggedIn && <Main domain={this.state.domain} />}
                {!this.state.hasLoggedIn && <LoginScreen domain={this.state.domain} />}
            </div>
        );
    }
}

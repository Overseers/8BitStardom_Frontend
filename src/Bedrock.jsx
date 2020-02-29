import React from 'react';
import './Bedrock.css';
import { Column, Row } from 'simple-flexbox'
import LoadSpinner from './Components/Props/LoadSpinner/LoadSpinner'
import Main from './Components/Main/Main';
import LoginScreen from './Components/Login/LoginScreen';
import './fonts/PixelOperatorHB8.ttf';

export default class Bedrock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasLoggedIn: false
        }
    }

    render() {
        return (
            <div id="root">
                {
                    this.state.hasLoggedIn &&
                    <Main />
                }
                {
                    !this.state.hasLoggedIn &&
                    <LoginScreen />
                }
            </div>
        );
    }
}

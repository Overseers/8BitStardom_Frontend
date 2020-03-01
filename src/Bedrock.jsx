import React from 'react';
import './Bedrock.css';
import Main from './components/Main';
import LoginScreen from './components/screen/Login/LoginScreen';
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

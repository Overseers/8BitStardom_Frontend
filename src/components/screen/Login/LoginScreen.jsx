import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import LoginForm from './Form';
import RegisterForm from './Register';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showRegisterScreen: false
        };
    }

    handleLoginSubmit(event) {
        event.preventDefault();
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Column className='loginBackground' vertical='center' horizontal='center'>
                <Row className='loginBox' horizontal='center' vertical='start'>
                    <Column>
                        <Row
                            horizontal='center'
                            style={{
                                margin: '15px',
                            }}>
                            <h1>8Bit Stardom</h1>
                        </Row>
                        {this.state.showRegisterScreen && (
                            <RegisterForm switchToLogin={() => this.setState({ showRegisterScreen: false })} domain={this.props.domain} />
                        )}
                        {!this.state.showRegisterScreen && (
                            <LoginForm switchToRegister={() => this.setState({ showRegisterScreen: true })} domain={this.props.domain} />
                        )}
                    </Column>
                </Row>
            </Column>
        );
    }
}

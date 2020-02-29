import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showRegisterScreen: false
        }
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        const { target } = event;
        console.log(target);
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Column className="loginBackground" vertical="center" horizontal="center">
                <Row className="loginBox" horizontal="center" vertical="start">
                    <Column>
                        <Row
                            horizontal="center"
                            style={{
                                margin: '15px'
                            }}
                        >
                            <h1>8Bit Stardom</h1>
                        </Row>
                        {
                            this.state.showRegisterScreen && <RegisterForm />
                        }
                        {
                            !this.state.showRegisterScreen && <LoginForm />
                        }
                    </Column>
                </Row>
            </Column>
        )
    }
}
import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
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
                        <form onSubmit={this.handleFormSubmit}>
                            <Row
                                horizontal="center"
                                style={{
                                    margin: '15px'
                                }}
                            >
                                <h1>8Bit Stardom</h1>
                            </Row>
                            <Row
                                horizontal="center"
                                style={{
                                    margin: '15px'
                                }}
                            >
                                <Column>
                                    <Row horizontal="spaced">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            style={{
                                                width: '300px',
                                                height: '50px',
                                                fontSize: 25
                                            }}
                                        />
                                    </Row>
                                </Column>
                            </Row>
                            <Row
                                horizontal="center"
                                style={{
                                    margin: '15px'
                                }}
                            >
                                <Column>
                                    <Row>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            style={{
                                                width: '300px',
                                                height: '50px',
                                                fontSize: 25
                                            }}
                                        />
                                    </Row>
                                </Column>
                            </Row>
                            <Row
                                horizontal="center"
                                style={{
                                    margin: '15px'
                                }}
                            >
                                <Column vertical="center" style={{ marginRight: '5px' }}>
                                    <label className="input-title">Remember Me</label>
                                </Column>
                                <Column>
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span className="checkbox-custom rectangular" />
                                    </label>
                                </Column>
                            </Row>
                            <Row
                                horizontal="center"
                                style={{
                                    margin: '15px'
                                }}
                            >
                                <Row>
                                    <button
                                        className="genericButton"
                                        onClick={() => console.log('button')}
                                    >
                                        Register
                                    </button>
                                </Row>
                                <Row>
                                    <button
                                        className="genericButton"
                                        onClick={() => console.log('button')}
                                    >
                                        Login
                                    </button>
                                </Row>
                            </Row>
                            <Row
                                horizontal="center"
                                style={{
                                    margin: '15px'
                                }}
                            >
                                <Row>
                                    <button
                                        className="genericButton"
                                        style={{
                                            width: '250px'
                                        }}
                                        onClick={() => console.log('button')}
                                    >
                                        Reset Password
                                    </button>
                                </Row>
                            </Row>
                        </form>
                    </Column>
                </Row>
            </Column>
        )
    }
}
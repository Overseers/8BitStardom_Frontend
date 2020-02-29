import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
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
                                    height: '50px'
                                }}
                                className="placeholder"
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
        )
    }
}
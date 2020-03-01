import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <Row
                    horizontal='center'
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row horizontal='spaced'>
                            <input
                                type='text'
                                placeholder='Email'
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                                className='placeholder'
                            />
                        </Row>
                    </Column>
                </Row>
                <Row
                    horizontal='center'
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row>
                            <input
                                type='password'
                                placeholder='Password'
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                            />
                        </Row>
                    </Column>
                </Row>
                <Row
                    horizontal='center'
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row>
                            <input
                                type='password'
                                placeholder='Retype Password'
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                            />
                        </Row>
                    </Column>
                </Row>
                <Row
                    horizontal='center'
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row horizontal='spaced'>
                            <input
                                type='text'
                                placeholder='Username'
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                                className='placeholder'
                            />
                        </Row>
                    </Column>
                </Row>
                <Row
                    horizontal='center'
                    style={{
                        margin: '15px',
                    }}>
                    <Row>
                        <button className='genericButton' onClick={() => this.props.switchToLogin()}>
                            Already Registered
                        </button>
                    </Row>
                    <Row>
                        <button className='genericButton' onClick={() => console.log('button')}>
                            Submit Creation
                        </button>
                    </Row>
                </Row>
            </form>
        );
    }
}

import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import request from 'request-promise';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rememberMe: false,
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        request({
            method: 'POST',
            uri: `${this.props.domain}/login`,
            body: {
                email: this.state.email,
                password: this.state.password,
            },
            json: true,
        });

        console.log(this.state.email, this.state.password, this.state.rememberMe);
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <Row
                    horizontal={'center'}
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row horizontal={'spaced'}>
                            <input
                                type={'text'}
                                placeholder={'Email'}
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                                className={'placeholder'}
                                onChange={({ target }) => this.setState({ email: target.value })}
                            />
                        </Row>
                    </Column>
                </Row>
                <Row
                    horizontal={'center'}
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row>
                            <input
                                type={'password'}
                                placeholder={'Password'}
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                                onChange={({ target }) => this.setState({ password: target.value })}
                            />
                        </Row>
                    </Column>
                </Row>
                <Row
                    horizontal={'center'}
                    style={{
                        margin: '15px',
                    }}>
                    <Column
                        vertical={'center'}
                        style={{ marginRight: '5px' }}
                    >
                        <label className={'input-title'}>
                            {'Remember Me'}
                        </label>
                    </Column>
                    <Column>
                        <label className={'checkbox-label'}>
                            <input
                                type={'checkbox'}
                                onChange={({ target }) => this.setState({ rememberMe: target.checked })}
                            />
                            <span className={'checkbox-custom rectangular'} />
                        </label>
                    </Column>
                </Row>
                <Row
                    horizontal={'center'}
                    style={{
                        margin: '15px',
                    }}>
                    <Row>
                        <button
                            className={'genericButton'}
                            onClick={() => this.props.switchToRegister()}
                        >
                            {'Register'}
                        </button>
                    </Row>
                    <Row>
                        <button
                            className={'genericButton'}
                            onClick={() => console.log('button')}
                        >
                            {'Login'}
                        </button>
                    </Row>
                </Row>
                <Row
                    horizontal={'center'}
                    style={{
                        margin: '15px',
                    }}>
                    <Row>
                        <button
                            className={'genericButton'}
                            style={{
                                width: '250px',
                            }}
                            onClick={() => console.log('button')}
                        >
                            {'Reset Password'}
                        </button>
                    </Row>
                </Row>
            </form>
        );
    }
}

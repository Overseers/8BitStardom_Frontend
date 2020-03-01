import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.fields = ['Email', 'Password', 'Retype Password', 'Username'];

        this.buildFields = this.buildFields.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    buildFields() {
        return this.fields.map((e, i) => {
            return (
                <Row
                    key={`REGISTER-${i}-${e}`}
                    horizontal={'center'}
                    style={{
                        margin: '15px',
                    }}>
                    <Column>
                        <Row horizontal={'spaced'}>
                            <input
                                type={(!e.includes('Password')) ? 'text' : 'password'}
                                placeholder={e}
                                style={{
                                    width: '300px',
                                    height: '50px',
                                }}
                                className={'placeholder'}
                            />
                        </Row>
                    </Column>
                </Row>
            );
        });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                {this.buildFields()}
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

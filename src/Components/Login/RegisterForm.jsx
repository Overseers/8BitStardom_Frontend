import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            </form>
        )
    }
}
import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Column id="Bedrock">
                <Row id="Header">
                    test
                </Row>
                <Row id="MainContent">
                    <Column>
                        test
                    </Column>
                    <Column>
                        test
                    </Column>
                </Row>
                <Row id="Footer">
                    test
                </Row>
            </Column>
        )
    }
}
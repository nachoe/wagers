import React, { Component } from 'react';
import {HashRouter, Route } from 'react-router-dom';
import Nav from './nav'

export default class Start extends Component {
    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}
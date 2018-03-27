import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <Link className="navbar-brand" to="/">Place your bets!</Link>
                    </div>
                    <div className="navbar-collapse">

                        <div className="navbar-form">
                            <div className="navbar-left">
                                <Link className="btn btn-default" to="/bet/new">Create</Link>
                            </div>
                            <div className="navbar-right">
                                <Button className="btn btn-default"> Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
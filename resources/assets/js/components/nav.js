import React, { Component } from 'react';

import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <span className="navbar-brand">Place your bets!</span>
                    </div>
                    <div className="navbar-collapse">

                        <div className="navbar-form">
                            <div className="navbar-right">
                                <Link className="btn btn-default" to="/bet/new">Create</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
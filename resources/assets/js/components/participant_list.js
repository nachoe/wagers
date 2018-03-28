import React, { Component } from 'react';

export default class ParticipantList extends Component {
    render() {
        const {name, placed_bet} = this.props.participant;

        return (
            <div key={name}>{name + " (" + placed_bet + ")"}</div>
        )
    }
}
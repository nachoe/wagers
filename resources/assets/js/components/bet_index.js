import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBets } from '../actions/actions_bets';
import { bindActionCreators } from 'redux';

import ParticipantList from './participant_list'

import { Link} from 'react-router-dom'
import _ from 'lodash';

class BetIndex extends Component {
    componentDidMount() {
        this.props.fetchBets();
    }

    renderList() {
        return _.map(this.props.bets, bet => {
            const view_url = "/bet/view/" + bet.id;

            let participants = _.map(bet.participants, participant => {
                return (
                    <ParticipantList key={participant.name} participant={participant}/>
                );
            });

            return (
                <li key={bet.id}
                    className="list-group-item">
                    <Link to={view_url}>{bet.title}</Link>
                    <small>{bet.description} <br/> {participants}</small>

                </li>
            );
        });
    }

    render() {
        return (
            <ul className="nav nav-pills nav-stacked">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {

    return {
        bets: state.bets
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({fetchBets}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(BetIndex);
import React, { Component } from 'react';
import BetParticipantForm from './bet_participant_form'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchParticipant} from '../actions/actions_participants'
import {fetchBet} from '../actions/actions_bets'
import _ from 'lodash';

class BetParticipant extends Component {

    componentDidMount(){
        this.props.fetchBet(this.props.match.params.bet_id);
        this.props.fetchParticipant(this.props.match.params.bet_id);
    }

    render() {
        if (_.isEmpty(this.props.bet) || (!this.props.participant)) {
            return <div></div>;
        }

        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>Join Bet!</h3>
                    <BetParticipantForm bet_id={this.props.match.params.bet_id} initialValues={{'placed_bet': this.props.participant.placed_bet}}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({participant, bet}) {

    return {
        participant: participant,
        bet: bet
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({fetchParticipant, fetchBet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BetParticipant);

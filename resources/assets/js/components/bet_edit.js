import React, { Component } from 'react';
import BetForm from './bet_form'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchBet} from '../actions/actions_bets'

class BetEdit extends Component {
    componentDidMount(){
        this.props.fetchBet(this.props.match.params.id)
    }

    render() {
        if (!this.props.bet) {
            return <div></div>;
        }
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>Edit Bet!</h3>
                    <BetForm bet={this.props.bet} isEdit="true"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({bet}) {

    return {
        bet: bet
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({fetchBet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BetEdit);

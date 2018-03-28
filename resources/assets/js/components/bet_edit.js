import React, { Component } from 'react';
import BetForm from './bet_form'
import { fetchBet } from '../actions/actions_bets'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class BetEdit extends Component {
    componentDidMount() {
        this.props.fetchBet(this.props.match.params.id)
    }

    render() {
        if (_.isEmpty(this.props.bet)) {
            return <div></div>
        }
        const {bet} = this.props;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>Edit Bet!</h3>
                    <BetForm initialValues={bet} bet_id={bet.id} isEdit="true"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({bet}) {

    return {
        bet: bet,
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({fetchBet}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(BetEdit);

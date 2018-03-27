import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewBet } from '../actions/actions_fetch_bets';
import { bindActionCreators } from 'redux';


class BetView extends Component {
    componentDidMount() {
        this.props.viewBet()
    }

    render() {
        console.log(this.props.view_bet);
        return (
            <div>
                One specific bet!
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        view_bet: state.view_bet
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({viewBet}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(BetView);
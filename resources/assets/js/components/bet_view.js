import React, { Component } from 'react';
import { fetchBet } from '../actions/actions_bets'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BetView extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchBet(id);
    }

    render() {
        const { bet } = this.props;

        if (!bet) {
            return <div>loading...</div>
        }
console.log(bet);
        return (
            <div className="panel">
                <div className="panel-header">
                    <h1>{bet.description}</h1>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-3">
                            {bet.wager}
                        </div>
                        <div className="col-sm-3">
                            {bet.start_date}
                        </div>
                        <div className="col-sm-3">
                            {bet.end_date}
                        </div>
                        <div className="col-sm-3">
                            {bet.participants}
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BetView);

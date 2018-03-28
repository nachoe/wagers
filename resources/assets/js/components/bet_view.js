import React, {Component} from 'react';
import {fetchBet, deleteBet} from '../actions/actions_bets'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class BetView extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchBet(id);
    }

    onDelete() {
        const { id } = this.props.match.params;

        this.props.deleteBet(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { bet } = this.props;

        if (!bet) {
            return <div>loading...</div>
        }
        const edit_url =  `/bet/edit/${bet.id}`;
        const join_url =  `/bet/join/${bet.id}/1`;
        console.log(bet);
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-sm-7">

                            <h1>{bet.title}</h1>
                        </div>
                        <div className="col-sm-5 text-right">
                            <button className="btn btn-default" onClick={this.onDelete.bind(this)}>Delete</button>
                            <Link className="btn btn-default" to={edit_url}>Edit</Link>
                            <Link className="btn btn-default" to={join_url}>Join</Link>
                        </div>
                    </div>

                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-3">
                            {bet.wager}
                        </div>
                        <div className="col-sm-3">
                            {bet.description}
                        </div>
                        <div className="col-sm-3">
                            {bet.created_at}
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

    return bindActionCreators ({fetchBet, deleteBet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BetView);

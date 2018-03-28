import React, { Component } from 'react';
import BetJoinForm from './bet_join_form'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchParticipant} from '../actions/actions_participants'
import _ from 'lodash';

class BetJoin extends Component {
    componentDidMount(){
        this.props.fetchParticipant(this.props.match.params.p_id)
    }

    render() {
        if (_.isEmpty(this.props.participant)) {
            return <div></div>;
        }
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>Join Bet!</h3>
                    <BetJoinForm bet={this.props.participant}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({participant}) {

    return {
        participant: participant
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({fetchParticipant}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BetJoin);

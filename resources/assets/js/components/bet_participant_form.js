import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import { updateParticipant, createParticipant} from '../actions/actions_participants'
import { connect } from 'react-redux';
import _ from 'lodash';
import {renderField} from '../form/render_field'

class BetParticipantForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fireRedirect: false
        }
    }

    onSubmit(values) {
        const {bet_id} = this.props;

        if (!_.isEmpty(this.props.participant)) {

            this.props.updateParticipant(values, bet_id, () => {
                this.setState({ fireRedirect: true })
            });
        } else {
            this.props.createParticipant(values, bet_id, () => {
                this.setState({ fireRedirect: true })
            });
        }
    }

    render() {
        if (this.props.isEdit && !this.props.bet) {
            return <div></div>;
        }

        const { handleSubmit } = this.props;
        const { fireRedirect } = this.state;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="placed_bet"
                        label="What is your guess"
                        component={renderField}
                    />
                    <div className="row">
                        <div className="col-xs-6 text-left">
                            <button className="btn btn-default" type="submit">Submit</button>
                        </div>
                        <div className="col-xs-6 text-right">
                            <Link className="btn btn-danger" to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
                {fireRedirect && (
                    <Redirect to={'/'}/>
                )}
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.description) {
        errors.description = "Enter a description"
    }

    if (!values.title) {
        errors.title = "Enter a title"
    }

    if (!values.wager) {
        errors.wager = "Enter a wager"
    }
    //if errors is empty the form is valid
    return errors;
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({updateParticipant, createParticipant}, dispatch);

}

export default reduxForm({
    form: 'participantForm',
    validate
})(connect(null, mapDispatchToProps)(BetParticipantForm));
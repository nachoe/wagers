import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import { updateBet, createBet} from '../actions/actions_bets'
import { connect } from 'react-redux';
import {renderField} from '../form/render_field'


class BetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fireRedirect: false,
        };
    }

    onSubmit(values) {
        if (this.props.isEdit) {
            const {id} = this.props.bet;
            this.props.updateBet(values, id, () => {
                this.setState({ fireRedirect: true })
            });
        } else {
            this.props.createBet(values, () => {
                this.setState({ fireRedirect: true })
            });
        }
    }

    render() {
        const { handleSubmit } = this.props;
        const { fireRedirect } = this.state;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="title"
                        label="Title"
                        component={renderField}
                    />
                    <Field
                        name="description"
                        label="Description"
                        component={renderField}
                    />
                    <Field
                        name="notes"
                        label="Notes"
                        component={renderField}
                    />
                    <Field
                        name="wager"
                        label="Wager"
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

    return bindActionCreators ({updateBet, createBet}, dispatch);

}

export default reduxForm({
    form: 'betForm',
    validate
})(connect(mapDispatchToProps)(BetForm));
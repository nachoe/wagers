import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { createBet } from '../actions/actions_bets'
import { connect } from 'react-redux';

class NewComp extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label htmlFor="">{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
                <span className="text-danger">{touched ? error : ''}</span>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createBet(values, () => {

            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <h3>New Bet</h3>
                        <Field
                            name="title"
                            label="Title"
                            component={this.renderField}
                        />
                        <Field
                            name="description"
                            label="Description"
                            component={this.renderField}
                        />
                        <Field
                            name="notes"
                            label="Notes"
                            component={this.renderField}
                        />
                        <div className="row">
                            <div className="col-sm-6 text-left">
                                <button className="btn btn-default" type="submit">Submit</button>
                            </div>
                            <div className="col-sm-6 text-right">
                                <Link className="btn btn-danger" to="/">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
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

    if (!values.notes) {
        errors.notes = "Enter a notes"
    }
    //if errors is empty the form is valid
    return errors;
}

function mapStateToProps(state) {

    return {
        bets: state.bets
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators ({createBet}, dispatch);

}

export default reduxForm({
    form: 'RecipeNewForm',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(NewComp));
